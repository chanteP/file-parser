import { createDefer, getNumberInRange, reverseArrayBuffer } from './utils';

export interface GroupRecord {
    type: 'group';
    level: number;
    name: string;
    content: FileRecords[];

    optional?: boolean;
    loop?: boolean;
}

export enum DataOrder {
    BE = 0,
    LE = 1,
}

export interface FieldRecord {
    type: 'field';
    name: string;
    offset: number | string;
    length?: number | string;
    end?: number | string;
    data: ArrayBuffer | null;
    value: FieldValue;
    shouldMove: boolean;
    order: DataOrder;
    formatter: string[];
}

export interface CommandRecord {
    type: 'command';
    name: string;
    args: FieldValue[];
}

type FileRecords = GroupRecord | FieldRecord | CommandRecord;
export type FieldValue = string | number | ArrayBuffer | null | undefined;

export type DataFormatter = (data: FieldValue) => FieldValue;

const dataFormatterMap: Map<string, DataFormatter> = new Map();

export class FileData {
    data: FileRecords[] = [];

    VO: Map<string, FieldValue> = new Map();
    pointer = 0;

    private groupStack: GroupRecord[] = [];
    maxLoopLimit = 10000;

    private file?: File;
    private cacheFileData?: ArrayBuffer;

    get size() {
        return this.file?.size ?? 0;
    }

    ready = createDefer();

    // group ------------------------------------------------------------
    get currentScope() {
        return this.groupStack.length > 0 ? this.groupStack[this.groupStack.length - 1] : null;
    }
    private popTo(level: number) {
        while (this.currentScope) {
            if (this.currentScope.level >= level) {
                this.groupStack.pop();
            } else {
                break;
            }
        }
    }

    // record ------------------------------------------------------------
    private addRecord(record: FileRecords) {
        const scope = this.currentScope?.content ?? this.data;
        scope.push(record);
    }

    push(record: FileRecords) {
        if (record.type === 'group') {
            this.popTo(record.level);
            this.addRecord(record);
            this.groupStack.push(record);
            return;
        }
        if (record.type === 'field') {
            this.VO.set(record.name, record.value);
        }
        this.addRecord(record);
    }

    // data operation --------------------------------------------------
    hasFile() {
        return !!this.file;
    }

    setFile(file?: File) {
        this.file = file;
        this.cacheFileData = undefined;
    }

    async getFileData() {
        if (!this.file) {
            return null;
        }
        if (this.cacheFileData) {
            return this.cacheFileData;
        }
        this.cacheFileData = await this.file.arrayBuffer();
        return this.cacheFileData;
    }
    async getData(start: number, end: number, order: DataOrder = DataOrder.LE): Promise<ArrayBuffer | null> {
        if (!this.file) {
            return null;
        }
        const data = await this.file.slice(start, end).arrayBuffer();
        if (order === DataOrder.BE) {
            return reverseArrayBuffer(data);
        }
        return data;
    }

    pipeDataFormatter(data: ArrayBuffer | null, dataFormatterKeys: string[]): FieldValue {
        let rs = data;
        dataFormatterKeys.forEach((key) => {
            const formatter = dataFormatterMap.get(key);
            if (!formatter) {
                console.warn(`formatter '${key}' lost`);
                return;
            }
            rs = formatter(rs);
        });
        return rs;
    }

    getVar(name: string, defaultValue = 0) {
        if (!this.file) {
            return defaultValue;
        }
        return this.VO.get(name) ?? defaultValue;
    }

    // pointer operation --------------------------------------------------
    move(offset: number) {
        if (typeof offset === 'number') {
            const position = this.pointer + offset;
            this.pointer = getNumberInRange(position, 0, this.size);
            if (this.pointer !== position) {
                console.warn('range Error');
            }
        }
    }
    moveTo(position: number) {
        if (typeof position === 'number') {
            this.pointer = getNumberInRange(position, 0, this.size);
            if (this.pointer !== position) {
                console.warn('range Error');
            }
        }
    }
}

export function registerDataFormatter(name: string, formatter: DataFormatter) {
    if (dataFormatterMap.has(name)) {
        console.warn(`formatter '${name}' has existed`);
    }
    dataFormatterMap.set(name, formatter);
}

export function getDataFormatterList() {
    return [...dataFormatterMap.keys()];
}
