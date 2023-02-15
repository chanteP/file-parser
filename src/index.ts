import { registerDataFormatter } from './FileData';
import { transformMap } from './dataFormat';

export { registerDataFormatter } from './FileData';
export { parse } from './parser';

Object.keys(transformMap).forEach((key) => {
    registerDataFormatter(key, transformMap[key]!);
});
