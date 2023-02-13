import type { DataFormatter, FieldValue } from '../FileData';

export function toString(data: FieldValue) {
    return data?.toString();
}

export function toNumber(data: FieldValue) {
    return Number(data);
}
