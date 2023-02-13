grammar FileDesc;

/*
 * Parser Rules
 */

file: NEWLINE? fileData? EOF;

fileData: line (NEWLINE line)*;

line: fieldLine | commandLine | groupLine;

groupLine: groupCommandExpr? GROUP_MARK .*?;
fieldLine: VAR PART_SPLIT offsetExpr (PART_SPLIT dataFormatExpr)?;

commandLine
    : backCommand
    | nextCommand
    | gotoCommand
    | gotoCommand
    | findCommand
    | backFindCommand
    ;


groupCommandExpr: whileCommand | ifCommand | loopCommand;

// command ---------------------------------
whileCommand: WHILE '(' multiByteValue ')';
findCommand: FIND '(' multiByteValue ')';
backFindCommand: BACKFIND '(' multiByteValue ')';

ifCommand: IF '(' VAR 'is' multiMatchDataValue ')';
loopCommand: LOOP '(' numberValue ')';

backCommand: BACK '(' numberValue ')';
gotoCommand: GOTO '(' numberValue ')';
nextCommand: NEXT '(' numberValue ')';

// base value expression ---------------------------------
numberValue: varExpr | NUMBER;
multiByteValue: byteValue ('|' byteValue)*;
multiMatchDataValue: matchDataExpr ('|' matchDataExpr)*;
byteValue: varExpr | BYTE_VALUE;
matchDataExpr: BYTE_VALUE | DATA_STRING | NUMBER;

offsetExpr
    : numberValue
    | '[' numberValue ',' numberValue ']'
    | ('>' | '<') offsetExpr
    ;
dataFormatExpr: VAR ('|' VAR)*;

varExpr: '${' calcExpr '}';
calcExpr:
    VAR
    | NUMBER
    | '(' calcExpr ')'
    | calcExpr (ASTERISK | SLASH) calcExpr
    | calcExpr (PLUS | MINUS) calcExpr
    ;




/*
 * Lexer Rules
 */

fragment LETTER: [a-zA-Z\u0080-\u00FF_];
fragment ALL_LETTER: LETTER | DIGIT;
fragment ID: LETTER ALL_LETTER*;
fragment DIGIT: [0-9];
fragment HEX: [a-fA-F0-9];

BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);

// command --------------------
IF: 'if';
LOOP: 'loop';
WHILE: 'while';
FIND: 'find';
BACKFIND: 'backFind';
BACK: 'back';
NEXT: 'next';
GOTO: 'goto';

// mark --------------------
ASTERISK: '*';
SLASH: '/';
PLUS: '+';
MINUS: '-';

PART_SPLIT: ',';
GROUP_MARK: '#'+;

NEWLINE: ('\r'? '\n' | '\r')+;

// value --------------------
DATA_STRING:
    '"' ALL_LETTER* '"'
    | '\'' ALL_LETTER* '\''
    ;
BYTE_VALUE: '[' (HEX HEX)+ ']';
NUMBER: DIGIT+ ('.' DIGIT+)?;
VAR: ID;

WHITESPACE: [ \t]+ -> skip;
