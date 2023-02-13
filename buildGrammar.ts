import { exec } from 'child_process';
import { readFileSync, writeFileSync, unlinkSync } from 'fs';

(() => {
    // 什么时候支持ts啊啊啊啊
    const parserPath = './src/grammar/FileDescParser.js';
    const content = readFileSync(parserPath, 'utf8').replace('./FileDescVisitor.js', './FileDescVisitor');
    writeFileSync(parserPath, content);
    unlinkSync('./src/grammar/FileDescVisitor.js');
})();
