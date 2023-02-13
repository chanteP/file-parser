import antlr4 from 'antlr4';

import { FileData } from './FileData';
import FileDescLexer from './grammar/FileDescLexer';
import FileDescVisitor from './grammar/FileDescVisitor';
import FileDescParser from './grammar/FileDescParser';

export function parse(fileFormat: string, file?: File) {
    const chars = new antlr4.InputStream(fileFormat);
    const lexer = new FileDescLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new FileDescParser(tokens);
    // parser.buildParseTrees = true;

    const tree = parser.program();

    const data = new FileData();
    data.setFile(file);

    console.log('tokens', tokens.tokens.map(t => t.text));
    console.log('tree', tree, tree.children[1].children.map(t => t.getText()));

    tree.accept(new FileDescVisitor(data));

    console.log(data);
    return data;
}
