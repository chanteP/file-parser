import { parse } from './parser';
import { registerDataFormatter } from './FileData';
import { toNumber, toString } from './dataFormat';

export { registerDataFormatter } from './FileData';

registerDataFormatter('string', toString);
registerDataFormatter('number', toNumber);

const fileFormat = `
#header
magic,4
version,4
length,4

#part
chunkLength, 4, number
chunkType, 4, string

if(chunkType is 'JSON') ## json
data,\${chunkLength}, string

if(chunkType is 'BIN') ## bin
data,\${chunkLength}

while([42 29 4e]) ## bin
data,\${chunkLength}

`;

// const fileFormat = `
// magic

// `;

(async () => {
    const rs = await parse(fileFormat);

    console.log('final----', rs);
})();
