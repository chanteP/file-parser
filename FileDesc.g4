grammar FileDesc;

/**
 parser ------------------------------------------
 */

program: NEWLINE? fileData? NEWLINE? EOF;

fileData: line (NEWLINE line)*;

line: fieldLine | commandLine | groupLine;

groupLine: groupCommandExpr? GROUP_MARK textValue?;
fieldLine:
	VAR PART_SPLIT offsetExpr (PART_SPLIT dataFormatExpr)?;

commandLine:
	backCommand
	| nextCommand
	| gotoCommand
	| findCommand
	| backFindCommand;

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

// basic expression ---------------------------------
multiByteValue: byteValue ('|' byteValue)*;
multiMatchDataValue: matchDataExpr ('|' matchDataExpr)*;
matchDataExpr: BYTE_VALUE | STRING | NUMBER;

offsetExpr: ('>' | '<')? (
		numberValue
		| '[' numberValue ',' numberValue ']'
	);

dataFormatExpr: VAR ('|' VAR)*;

// basic value ---------------------------------
textValue: (varExpr | VAR | NUMBER | STRING)+;
stringValue: (varExpr | VAR)+;
numberValue: varExpr | NUMBER;
byteValue: varExpr | BYTE_VALUE;

varExpr: '${' calcExpr '}';
calcExpr:
	VAR
	| NUMBER
	| '(' calcExpr ')'
	| calcExpr (ASTERISK | SLASH) calcExpr
	| calcExpr (PLUS | MINUS) calcExpr;

/**
 lexer ------------------------------------------
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
STRING: '"' .*? '"' | '\'' .*? '\'';

BYTE_VALUE: '[' (HEX HEX)+ ']';
NUMBER: DIGIT+ ('.' DIGIT+)?;
VAR: ID;

WHITESPACE: [ \t]+ -> skip;
