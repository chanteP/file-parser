import antlr4 from 'antlr4';
import FileDescLexer from '../grammar/FileDescLexer';
import FileDescParser from '../grammar/FileDescParser';
import FileDescVisitor from '../grammar/FileDescVisitor';

const input = `
data = 3 + 4
`;


const chars = new antlr4.InputStream(input);
const lexer = new FileDescLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new FileDescParser(tokens);
// parser.buildParseTrees = true;

const tree = parser.all();

const { AddContext, AssignContext, IntContext, PrimContext } = FileDescParser;

tree.accept(new FileDescVisitor());
