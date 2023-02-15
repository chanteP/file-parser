import { registerDataFormatter } from './FileData';
import { toNumber, toString } from './dataFormat';

export { registerDataFormatter } from './FileData';
export { parse } from './parser';

registerDataFormatter('string', toString);
registerDataFormatter('-', toString);
registerDataFormatter('number', toNumber);
registerDataFormatter('+', toNumber);
