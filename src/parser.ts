import antlr4 from 'antlr4';

import { FileData } from './FileData';
import FileDescLexer from './grammar/FileDescLexer';
import FileDescParser from './grammar/FileDescParser';
import FileDescVisitor from './grammar/FileDescVisitor';

const input = `
    #fasdf
`;

const chars = new antlr4.InputStream(input);
const lexer = new FileDescLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new FileDescParser(tokens);
// parser.buildParseTrees = true;

const tree = parser.file();

const { AddContext, AssignContext, IntContext, PrimContext } = FileDescParser;

const data = new FileData();

tree.accept(new FileDescVisitor(data));

console.log(data);
