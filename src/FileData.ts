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
    LE,
}

export interface FieldRecord {
    type: 'field';
    name: string;
    offset: number;
    length: number;
    order: DataOrder;
    data: ArrayBuffer;
    value: string | number | ArrayBuffer;
    formatter: string[];

    offsetString?: string;
    lengthString?: string;
    endString?: string;
}

type FileRecords = GroupRecord | FieldRecord;
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
    private addRecord(record: GroupRecord | FieldRecord) {
        const scope = this.currentScope;
        if (scope) {
            scope.content.push(record);
        } else {
            this.data.push(record);
        }
    }

    push(record: GroupRecord | FieldRecord) {
        if (record.type === 'group') {
            this.popTo(record.level);
            this.addRecord(record);
            this.groupStack.push(record);
            return;
        }
        if (record.type === 'field') {
            this.addRecord(record);
            const value = record.data;
            this.VO.set(record.name, value);
            return;
        }
    }

    // data operation --------------------------------------------------
    hasFile(){

    }

    setFile(file?: File) {
        this.file = file;
    }

    getData(start: number, end: number) {
        if (!this.file) {
            return null;
        }
        return this.file.slice(start, end);
    }

    pipeDataFormatter(data: FieldValue, dataFormatterKeys: string[]) {
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
