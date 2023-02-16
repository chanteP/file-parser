import { FileFormat } from './type';

export const GLB: FileFormat = {
    name: 'glb',
    format: `
#header
magic,4, string
version,4, number
length,4, number

loop(2)#part
chunkLength, 4, number
chunkType, 4, string

if(chunkType is 'JSON') ## json
data,\${chunkLength},string|json

if(chunkType is 'BIN\x00') ## bin
data,\${chunkLength}
    `,
};
