import type { DataFormatter } from '@/FileData';
import { toJSON, toNumber, toString } from './transform';

export const transformMap: Record<string, DataFormatter> = {
    string: toString,
    '-': toString,
    number: toNumber,
    '+': toNumber,
    json: toJSON,
};
