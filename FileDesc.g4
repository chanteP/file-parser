grammar FileDesc;

/**
 parser ------------------------------------------
 */

program: NEWLINE? fileData? NEWLINE? EOF;

fileData: line (NEWLINE line)*;

line: fieldLine | commandLine | groupLine;

groupLine: scopeCommandExpr? GROUP_TITLE;
fieldLine:
	scopeCommandExpr? VAR PART_SPLIT offsetExpr (
		PART_SPLIT dataFormatExpr
	)?;

commandLine:
	backCommand
	| nextCommand
	| gotoCommand
	| findCommand
	| backFindCommand;

scopeCommandExpr: (whileCommand | ifCommand | loopCommand) ':';

// command ---------------------------------
whileCommand: WHILE '(' multiByteValue ')';
ifCommand: IF '(' VAR 'is' multiMatchDataValue ')';
loopCommand: LOOP '(' numberValue? ')';

findCommand: FIND '(' multiByteValue ')';
backCommand: BACK '(' numberValue ')';
gotoCommand: GOTO '(' numberValue ')';
nextCommand: NEXT '(' numberValue ')';
backFindCommand: BACKFIND '(' multiByteValue ')';

// basic expression ---------------------------------
multiByteValue: byteValue ('|' byteValue)*;
multiMatchDataValue: matchDataExpr ('|' matchDataExpr)*;
matchDataExpr: byteData | string | number;

offsetExpr: ('>' | '<')? (
		numberValue
		| '[' numberValue ',' numberValue ']'
	);

dataFormatExpr: VAR ('|' VAR)*;

// basic value --------------------------------- textValue: (varExpr | VAR | number | string)+;
stringValue: (varExpr | VAR)+;
numberValue: varExpr | number;
byteValue: varExpr | byteData;

varExpr: '${' calcExpr '}';
calcExpr:
	VAR
	| number
	| '(' calcExpr ')'
	| calcExpr (ASTERISK | SLASH) calcExpr
	| calcExpr (PLUS | MINUS) calcExpr;

string: STRING;
byteData: BYTE_VALUE;
number: NUMBER;

/**
 lexer ------------------------------------------
 */

fragment LETTER: [a-zA-Z\u0080-\u00FF_];
fragment ALL_LETTER: LETTER | DIGIT;
fragment ID: LETTER ALL_LETTER*;
fragment DIGIT: [0-9];
fragment HEX: [a-fA-F0-9];
fragment GROUP_SYMBOL: '#';

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
// GROUP_MARK: GROUP_SYMBOL+;
GROUP_TITLE: GROUP_SYMBOL+ ~[\r\n]*;

NEWLINE: ('\r'? '\n' | '\r')+;

// value --------------------
STRING: '"' .*? '"' | '\'' .*? '\'';

BYTE_VALUE: '[' HEX HEX (' ' HEX HEX)+ ']';
NUMBER: DIGIT+ ('.' DIGIT+)?;
VAR: ID;

WHITESPACE: [ \t]+ -> skip;
