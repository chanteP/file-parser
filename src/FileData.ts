interface GroupRecord {
    type: 'group';
    level: number;
    name: string;
    content: FileRecords[];
}

interface FieldRecord {
    type: 'field';
    name: string;
    offset: number;
    length: number;
    value: string | number | ArrayBuffer;
}

type FileRecords = GroupRecord | FieldRecord;

export class FileData {
    data: FileRecords[] = [];

    private groupStack: GroupRecord[] = [];

    get currentScope() {
        return this.groupStack.length > 0 ? this.groupStack[this.groupStack.length - 1] : null;
    }

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
            this.groupStack.push(record);
            return;
        }
        this.addRecord(record);
    }

    private popTo(level: number) {
        while (this.currentScope) {
            if (this.currentScope.level >= level) {
                this.groupStack.pop();
            }
        }
    }
}
