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
    data: Blob | null;
    value: FieldValue;
    shouldMove: boolean;
    order: DataOrder;
    formatter: string[];
}

export interface CommandRecord {
    type: 'command';
    name: string;
    text: string;
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
    // 防止死循环的东西，测试用
    private maxGroupLoopLimit = 30;
    private maxLoopLimit = 10000;

    private file?: File;

    // group ------------------------------------------------------------
    get currentScope() {
        return this.groupStack.length > 0 ? this.groupStack[this.groupStack.length - 1] : null;
    }
    private popTo(level: number) {
        let testLimit = this.maxGroupLoopLimit;

        while (this.currentScope && testLimit--) {
            if (this.currentScope.level >= level) {
                this.groupStack.pop();
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
    }

    getData(start: number, end: number, order: DataOrder = DataOrder.LE) {
        if (!this.file) {
            return null;
        }
        return this.file.slice(start, end);
    }

    pipeDataFormatter(data: Blob | null, dataFormatterKeys: string[]): FieldValue {
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
            this.pointer += offset;
        }
    }
    moveTo(position: number) {
        if (typeof position === 'number') {
            this.pointer = position;
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
