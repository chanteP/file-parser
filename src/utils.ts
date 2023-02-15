export function createDefer(): Promise<void> & {
    resolve: () => void;
    reject: () => void;
} {
    let resolve = () => {};
    let reject = () => {};
    const promise = new Promise<void>((res, rej) => {
        resolve = res;
        reject = rej;
    });

    promise.resolve = resolve;
    promise.reject = reject;
    return promise;
}

export function isOddFilter(data: any, index: number): boolean {
    return !(index % 2);
}

export function isByteValue(value: any, matchDataValue: Uint8Array): boolean {
    if (!(value instanceof ArrayBuffer && matchDataValue instanceof Uint8Array)) {
        return false;
    }

    const valueView = new Uint8Array(value);
    if (valueView.length !== matchDataValue.length) {
        return false;
    }

    let i = 0;
    while (i < matchDataValue.length) {
        i++;
        if (valueView[i] !== matchDataValue[i]) {
            return false;
        }
    }
    return true;
}

export function inMultiByteValue(value: any, multiByteValue: Uint8Array[]): boolean {
    return multiByteValue.some((data) => {
        return isByteValue(value, data);
    });
}

export function inMultiMatchDataValue(value: any, multiMatchDataValue: (string | number | Uint8Array)[]): boolean {
    return multiMatchDataValue.some((data) => {
        if (data === value) {
            return true;
        }
        if (data instanceof Uint8Array) {
            return isByteValue(value, data);
        }
        return false;
    });
}

export function isMultiByteValueWithOffset(data: ArrayBuffer, offset: number, multiMatchDataValue: Uint8Array[]) {
    let i = 0;
    while (true) {
        if (offset + i > data.byteLength) {
            return false;
        }
        const check = multiMatchDataValue.some((matchDataValue) => {
            const length = matchDataValue.length;
            if (offset + i + length > data.byteLength) {
                return false;
            }
            return isByteValue(data.slice(offset + i, length), matchDataValue);
        });
        if (check) {
            return true;
        }
        i++;
    }
    return false;
}
