import antlr4 from 'antlr4';

import { FileData } from '../src/FileData';
import FileDescLexer from '../src/grammar/FileDescLexer';
import FileDescVisitor from '../src/grammar/FileDescVisitor';
import FileDescParser from '../src/grammar/FileDescParser';


function parse(input: string){
    const chars = new antlr4.InputStream(input);
    const lexer = new FileDescLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new FileDescParser(tokens);
    // parser.buildParseTrees = true;
    
    return parser.file();
}

parse('4');

