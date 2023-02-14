import { exec } from 'child_process';
import { readFileSync, writeFileSync, unlinkSync, rename } from 'fs';

(async () => {
    // 生成的js修正手段
    // 什么时候支持ts啊啊啊啊
    const parserPath = './src/grammar/FileDescParser.js';
    const content = readFileSync(parserPath, 'utf8')
        .replace('./FileDescVisitor.js', './FileDescVisitor')
        .replace(/\nclass\s/g, () => {
            return '\nexport class ';
        });
    writeFileSync(parserPath, content);

    rename(parserPath, parserPath.replace('.js', '.ts'), (err) => {
        if (err) {
            console.error(err);
        }
    });

    unlinkSync('./src/grammar/FileDescVisitor.js');
})();
