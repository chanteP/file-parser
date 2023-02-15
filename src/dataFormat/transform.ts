import type { DataFormatter, FieldValue } from '../FileData';

export function toString(data: FieldValue) {
    if (data instanceof ArrayBuffer) {
        return new TextDecoder('utf-8').decode(data);
    }
    return data?.toString() ?? '';
}

export function toNumber(data: FieldValue) {
    if (data instanceof ArrayBuffer) {
        switch (data.byteLength) {
            case 4:
                return new Uint32Array(data)[0];
            case 2:
                return new Uint16Array(data)[0];
            case 1:
                return new Uint8Array(data)[0];
            default:
                console.error('unexpected data length', data);
                return 0;
        }
    }
    return Number(data) ?? 0;
}

export function toJSON(data: FieldValue) {
    if (typeof data !== 'string') {
        console.warn('expect string input');
        return data;
    }
    return JSON.stringify(JSON.parse(data), null, 4);
}
