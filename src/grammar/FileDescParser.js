// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FileDescVisitor from './FileDescVisitor';

const serializedATN = [4,1,32,226,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,3,0,54,8,0,
1,0,3,0,57,8,0,1,0,1,0,1,1,1,1,1,1,5,1,64,8,1,10,1,12,1,67,9,1,1,2,1,2,1,
2,3,2,72,8,2,1,3,3,3,75,8,3,1,3,1,3,3,3,79,8,3,1,4,1,4,1,4,1,4,1,4,3,4,86,
8,4,1,5,1,5,1,5,1,5,1,5,3,5,93,8,5,1,6,1,6,1,6,3,6,98,8,6,1,7,1,7,1,7,1,
7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,
1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,5,15,145,8,15,10,15,12,
15,148,9,15,1,16,1,16,1,16,5,16,153,8,16,10,16,12,16,156,9,16,1,17,1,17,
1,18,3,18,161,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,170,8,18,1,19,
1,19,1,19,5,19,175,8,19,10,19,12,19,178,9,19,1,20,1,20,1,20,1,20,4,20,184,
8,20,11,20,12,20,185,1,21,1,21,4,21,190,8,21,11,21,12,21,191,1,22,1,22,3,
22,196,8,22,1,23,1,23,3,23,200,8,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,
25,1,25,1,25,1,25,3,25,213,8,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,221,8,
25,10,25,12,25,224,9,25,1,25,0,1,50,26,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,0,4,1,0,28,30,1,0,5,6,1,0,21,22,1,
0,23,24,230,0,53,1,0,0,0,2,60,1,0,0,0,4,71,1,0,0,0,6,74,1,0,0,0,8,80,1,0,
0,0,10,92,1,0,0,0,12,97,1,0,0,0,14,99,1,0,0,0,16,104,1,0,0,0,18,109,1,0,
0,0,20,114,1,0,0,0,22,121,1,0,0,0,24,126,1,0,0,0,26,131,1,0,0,0,28,136,1,
0,0,0,30,141,1,0,0,0,32,149,1,0,0,0,34,157,1,0,0,0,36,160,1,0,0,0,38,171,
1,0,0,0,40,183,1,0,0,0,42,189,1,0,0,0,44,195,1,0,0,0,46,199,1,0,0,0,48,201,
1,0,0,0,50,212,1,0,0,0,52,54,5,27,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,56,
1,0,0,0,55,57,3,2,1,0,56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,59,5,
0,0,1,59,1,1,0,0,0,60,65,3,4,2,0,61,62,5,27,0,0,62,64,3,4,2,0,63,61,1,0,
0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,3,1,0,0,0,67,65,1,0,0,0,
68,72,3,8,4,0,69,72,3,10,5,0,70,72,3,6,3,0,71,68,1,0,0,0,71,69,1,0,0,0,71,
70,1,0,0,0,72,5,1,0,0,0,73,75,3,12,6,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,
1,0,0,0,76,78,5,26,0,0,77,79,3,40,20,0,78,77,1,0,0,0,78,79,1,0,0,0,79,7,
1,0,0,0,80,81,5,31,0,0,81,82,5,25,0,0,82,85,3,36,18,0,83,84,5,25,0,0,84,
86,3,38,19,0,85,83,1,0,0,0,85,86,1,0,0,0,86,9,1,0,0,0,87,93,3,24,12,0,88,
93,3,28,14,0,89,93,3,26,13,0,90,93,3,16,8,0,91,93,3,18,9,0,92,87,1,0,0,0,
92,88,1,0,0,0,92,89,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,11,1,0,0,0,94,
98,3,14,7,0,95,98,3,20,10,0,96,98,3,22,11,0,97,94,1,0,0,0,97,95,1,0,0,0,
97,96,1,0,0,0,98,13,1,0,0,0,99,100,5,15,0,0,100,101,5,1,0,0,101,102,3,30,
15,0,102,103,5,2,0,0,103,15,1,0,0,0,104,105,5,16,0,0,105,106,5,1,0,0,106,
107,3,30,15,0,107,108,5,2,0,0,108,17,1,0,0,0,109,110,5,17,0,0,110,111,5,
1,0,0,111,112,3,30,15,0,112,113,5,2,0,0,113,19,1,0,0,0,114,115,5,13,0,0,
115,116,5,1,0,0,116,117,5,31,0,0,117,118,5,3,0,0,118,119,3,32,16,0,119,120,
5,2,0,0,120,21,1,0,0,0,121,122,5,14,0,0,122,123,5,1,0,0,123,124,3,44,22,
0,124,125,5,2,0,0,125,23,1,0,0,0,126,127,5,18,0,0,127,128,5,1,0,0,128,129,
3,44,22,0,129,130,5,2,0,0,130,25,1,0,0,0,131,132,5,20,0,0,132,133,5,1,0,
0,133,134,3,44,22,0,134,135,5,2,0,0,135,27,1,0,0,0,136,137,5,19,0,0,137,
138,5,1,0,0,138,139,3,44,22,0,139,140,5,2,0,0,140,29,1,0,0,0,141,146,3,46,
23,0,142,143,5,4,0,0,143,145,3,46,23,0,144,142,1,0,0,0,145,148,1,0,0,0,146,
144,1,0,0,0,146,147,1,0,0,0,147,31,1,0,0,0,148,146,1,0,0,0,149,154,3,34,
17,0,150,151,5,4,0,0,151,153,3,34,17,0,152,150,1,0,0,0,153,156,1,0,0,0,154,
152,1,0,0,0,154,155,1,0,0,0,155,33,1,0,0,0,156,154,1,0,0,0,157,158,7,0,0,
0,158,35,1,0,0,0,159,161,7,1,0,0,160,159,1,0,0,0,160,161,1,0,0,0,161,169,
1,0,0,0,162,170,3,44,22,0,163,164,5,7,0,0,164,165,3,44,22,0,165,166,5,25,
0,0,166,167,3,44,22,0,167,168,5,8,0,0,168,170,1,0,0,0,169,162,1,0,0,0,169,
163,1,0,0,0,170,37,1,0,0,0,171,176,5,31,0,0,172,173,5,4,0,0,173,175,5,31,
0,0,174,172,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,
39,1,0,0,0,178,176,1,0,0,0,179,184,3,48,24,0,180,184,5,31,0,0,181,184,5,
30,0,0,182,184,5,28,0,0,183,179,1,0,0,0,183,180,1,0,0,0,183,181,1,0,0,0,
183,182,1,0,0,0,184,185,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,41,1,
0,0,0,187,190,3,48,24,0,188,190,5,31,0,0,189,187,1,0,0,0,189,188,1,0,0,0,
190,191,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,43,1,0,0,0,193,196,3,
48,24,0,194,196,5,30,0,0,195,193,1,0,0,0,195,194,1,0,0,0,196,45,1,0,0,0,
197,200,3,48,24,0,198,200,5,29,0,0,199,197,1,0,0,0,199,198,1,0,0,0,200,47,
1,0,0,0,201,202,5,9,0,0,202,203,3,50,25,0,203,204,5,10,0,0,204,49,1,0,0,
0,205,206,6,25,-1,0,206,213,5,31,0,0,207,213,5,30,0,0,208,209,5,1,0,0,209,
210,3,50,25,0,210,211,5,2,0,0,211,213,1,0,0,0,212,205,1,0,0,0,212,207,1,
0,0,0,212,208,1,0,0,0,213,222,1,0,0,0,214,215,10,2,0,0,215,216,7,2,0,0,216,
221,3,50,25,3,217,218,10,1,0,0,218,219,7,3,0,0,219,221,3,50,25,2,220,214,
1,0,0,0,220,217,1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,
223,51,1,0,0,0,224,222,1,0,0,0,23,53,56,65,71,74,78,85,92,97,146,154,160,
169,176,183,185,189,191,195,199,212,220,222];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FileDescParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'('", "')'", "'is'", "'|'", "'>'", "'<'", 
                            "'['", "']'", "'${'", "'}'", null, null, "'if'", 
                            "'loop'", "'while'", "'find'", "'backFind'", 
                            "'back'", "'next'", "'goto'", "'*'", "'/'", 
                            "'+'", "'-'", "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "BLOCK_COMMENT", "LINE_COMMENT", 
                             "IF", "LOOP", "WHILE", "FIND", "BACKFIND", 
                             "BACK", "NEXT", "GOTO", "ASTERISK", "SLASH", 
                             "PLUS", "MINUS", "PART_SPLIT", "GROUP_MARK", 
                             "NEWLINE", "STRING", "BYTE_VALUE", "NUMBER", 
                             "VAR", "WHITESPACE" ];
    static ruleNames = [ "program", "fileData", "line", "groupLine", "fieldLine", 
                         "commandLine", "groupCommandExpr", "whileCommand", 
                         "findCommand", "backFindCommand", "ifCommand", 
                         "loopCommand", "backCommand", "gotoCommand", "nextCommand", 
                         "multiByteValue", "multiMatchDataValue", "matchDataExpr", 
                         "offsetExpr", "dataFormatExpr", "textValue", "stringValue", 
                         "numberValue", "byteValue", "varExpr", "calcExpr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FileDescParser.ruleNames;
        this.literalNames = FileDescParser.literalNames;
        this.symbolicNames = FileDescParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 25:
    	    		return this.calcExpr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    calcExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FileDescParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 52;
	            this.match(FileDescParser.NEWLINE);
	        }

	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 2216681472) !== 0)) {
	            this.state = 55;
	            this.fileData();
	        }

	        this.state = 58;
	        this.match(FileDescParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fileData() {
	    let localctx = new FileDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FileDescParser.RULE_fileData);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.line();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 61;
	            this.match(FileDescParser.NEWLINE);
	            this.state = 62;
	            this.line();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FileDescParser.RULE_line);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.fieldLine();
	            break;
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.commandLine();
	            break;
	        case 13:
	        case 14:
	        case 15:
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.groupLine();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupLine() {
	    let localctx = new GroupLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FileDescParser.RULE_groupLine);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 57344) !== 0)) {
	            this.state = 73;
	            this.groupCommandExpr();
	        }

	        this.state = 76;
	        this.match(FileDescParser.GROUP_MARK);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 3489661440) !== 0)) {
	            this.state = 77;
	            this.textValue();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldLine() {
	    let localctx = new FieldLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FileDescParser.RULE_fieldLine);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(FileDescParser.VAR);
	        this.state = 81;
	        this.match(FileDescParser.PART_SPLIT);
	        this.state = 82;
	        this.offsetExpr();
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 83;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 84;
	            this.dataFormatExpr();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commandLine() {
	    let localctx = new CommandLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FileDescParser.RULE_commandLine);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.backCommand();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.nextCommand();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.gotoCommand();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 90;
	            this.findCommand();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 91;
	            this.backFindCommand();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupCommandExpr() {
	    let localctx = new GroupCommandExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FileDescParser.RULE_groupCommandExpr);
	    try {
	        this.state = 97;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.whileCommand();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.ifCommand();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 96;
	            this.loopCommand();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileCommand() {
	    let localctx = new WhileCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FileDescParser.RULE_whileCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(FileDescParser.WHILE);
	        this.state = 100;
	        this.match(FileDescParser.T__0);
	        this.state = 101;
	        this.multiByteValue();
	        this.state = 102;
	        this.match(FileDescParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	findCommand() {
	    let localctx = new FindCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FileDescParser.RULE_findCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(FileDescParser.FIND);
	        this.state = 105;
	        this.match(FileDescParser.T__0);
	        this.state = 106;
	        this.multiByteValue();
	        this.state = 107;
	        this.match(FileDescParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	backFindCommand() {
	    let localctx = new BackFindCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FileDescParser.RULE_backFindCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(FileDescParser.BACKFIND);
	        this.state = 110;
	        this.match(FileDescParser.T__0);
	        this.state = 111;
	        this.multiByteValue();
	        this.state = 112;
	        this.match(FileDescParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifCommand() {
	    let localctx = new IfCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FileDescParser.RULE_ifCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(FileDescParser.IF);
	        this.state = 115;
	        this.match(FileDescParser.T__0);
	        this.state = 116;
	        this.match(FileDescParser.VAR);
	        this.state = 117;
	        this.match(FileDescParser.T__2);
	        this.state = 118;
	        this.multiMatchDataValue();
	        this.state = 119;
	        this.match(FileDescParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loopCommand() {
	    let localctx = new LoopCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FileDescParser.RULE_loopCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(FileDescParser.LOOP);
	        this.state = 122;
	        this.match(FileDescParser.T__0);
	        this.state = 123;
	        this.numberValue();
	        this.state = 124;
	        this.match(FileDescParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	backCommand() {
	    let localctx = new BackCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FileDescParser.RULE_backCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(FileDescParser.BACK);
	        this.state = 127;
	        this.match(FileDescParser.T__0);
	        this.state = 128;
	        this.numberValue();
	        this.state = 129;
	        this.match(FileDescParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	gotoCommand() {
	    let localctx = new GotoCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FileDescParser.RULE_gotoCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(FileDescParser.GOTO);
	        this.state = 132;
	        this.match(FileDescParser.T__0);
	        this.state = 133;
	        this.numberValue();
	        this.state = 134;
	        this.match(FileDescParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nextCommand() {
	    let localctx = new NextCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FileDescParser.RULE_nextCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(FileDescParser.NEXT);
	        this.state = 137;
	        this.match(FileDescParser.T__0);
	        this.state = 138;
	        this.numberValue();
	        this.state = 139;
	        this.match(FileDescParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiByteValue() {
	    let localctx = new MultiByteValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FileDescParser.RULE_multiByteValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.byteValue();
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 142;
	            this.match(FileDescParser.T__3);
	            this.state = 143;
	            this.byteValue();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiMatchDataValue() {
	    let localctx = new MultiMatchDataValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FileDescParser.RULE_multiMatchDataValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.matchDataExpr();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 150;
	            this.match(FileDescParser.T__3);
	            this.state = 151;
	            this.matchDataExpr();
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchDataExpr() {
	    let localctx = new MatchDataExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FileDescParser.RULE_matchDataExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 1879048192) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	offsetExpr() {
	    let localctx = new OffsetExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FileDescParser.RULE_offsetExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===6) {
	            this.state = 159;
	            _la = this._input.LA(1);
	            if(!(_la===5 || _la===6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 30:
	            this.state = 162;
	            this.numberValue();
	            break;
	        case 7:
	            this.state = 163;
	            this.match(FileDescParser.T__6);
	            this.state = 164;
	            this.numberValue();
	            this.state = 165;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 166;
	            this.numberValue();
	            this.state = 167;
	            this.match(FileDescParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dataFormatExpr() {
	    let localctx = new DataFormatExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, FileDescParser.RULE_dataFormatExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(FileDescParser.VAR);
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 172;
	            this.match(FileDescParser.T__3);
	            this.state = 173;
	            this.match(FileDescParser.VAR);
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	textValue() {
	    let localctx = new TextValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, FileDescParser.RULE_textValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 183;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 9:
	                this.state = 179;
	                this.varExpr();
	                break;
	            case 31:
	                this.state = 180;
	                this.match(FileDescParser.VAR);
	                break;
	            case 30:
	                this.state = 181;
	                this.match(FileDescParser.NUMBER);
	                break;
	            case 28:
	                this.state = 182;
	                this.match(FileDescParser.STRING);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 185; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 3489661440) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringValue() {
	    let localctx = new StringValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, FileDescParser.RULE_stringValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 189;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 9:
	                this.state = 187;
	                this.varExpr();
	                break;
	            case 31:
	                this.state = 188;
	                this.match(FileDescParser.VAR);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 191; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9 || _la===31);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numberValue() {
	    let localctx = new NumberValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, FileDescParser.RULE_numberValue);
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.varExpr();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 194;
	            this.match(FileDescParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	byteValue() {
	    let localctx = new ByteValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, FileDescParser.RULE_byteValue);
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 197;
	            this.varExpr();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.match(FileDescParser.BYTE_VALUE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varExpr() {
	    let localctx = new VarExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, FileDescParser.RULE_varExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(FileDescParser.T__8);
	        this.state = 202;
	        this.calcExpr(0);
	        this.state = 203;
	        this.match(FileDescParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	calcExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CalcExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 50;
	    this.enterRecursionRule(localctx, 50, FileDescParser.RULE_calcExpr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.state = 206;
	            this.match(FileDescParser.VAR);
	            break;
	        case 30:
	            this.state = 207;
	            this.match(FileDescParser.NUMBER);
	            break;
	        case 1:
	            this.state = 208;
	            this.match(FileDescParser.T__0);
	            this.state = 209;
	            this.calcExpr(0);
	            this.state = 210;
	            this.match(FileDescParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 222;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 220;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CalcExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FileDescParser.RULE_calcExpr);
	                    this.state = 214;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 215;
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 216;
	                    this.calcExpr(3);
	                    break;

	                case 2:
	                    localctx = new CalcExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FileDescParser.RULE_calcExpr);
	                    this.state = 217;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 218;
	                    _la = this._input.LA(1);
	                    if(!(_la===23 || _la===24)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 219;
	                    this.calcExpr(2);
	                    break;

	                } 
	            }
	            this.state = 224;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

FileDescParser.EOF = antlr4.Token.EOF;
FileDescParser.T__0 = 1;
FileDescParser.T__1 = 2;
FileDescParser.T__2 = 3;
FileDescParser.T__3 = 4;
FileDescParser.T__4 = 5;
FileDescParser.T__5 = 6;
FileDescParser.T__6 = 7;
FileDescParser.T__7 = 8;
FileDescParser.T__8 = 9;
FileDescParser.T__9 = 10;
FileDescParser.BLOCK_COMMENT = 11;
FileDescParser.LINE_COMMENT = 12;
FileDescParser.IF = 13;
FileDescParser.LOOP = 14;
FileDescParser.WHILE = 15;
FileDescParser.FIND = 16;
FileDescParser.BACKFIND = 17;
FileDescParser.BACK = 18;
FileDescParser.NEXT = 19;
FileDescParser.GOTO = 20;
FileDescParser.ASTERISK = 21;
FileDescParser.SLASH = 22;
FileDescParser.PLUS = 23;
FileDescParser.MINUS = 24;
FileDescParser.PART_SPLIT = 25;
FileDescParser.GROUP_MARK = 26;
FileDescParser.NEWLINE = 27;
FileDescParser.STRING = 28;
FileDescParser.BYTE_VALUE = 29;
FileDescParser.NUMBER = 30;
FileDescParser.VAR = 31;
FileDescParser.WHITESPACE = 32;

FileDescParser.RULE_program = 0;
FileDescParser.RULE_fileData = 1;
FileDescParser.RULE_line = 2;
FileDescParser.RULE_groupLine = 3;
FileDescParser.RULE_fieldLine = 4;
FileDescParser.RULE_commandLine = 5;
FileDescParser.RULE_groupCommandExpr = 6;
FileDescParser.RULE_whileCommand = 7;
FileDescParser.RULE_findCommand = 8;
FileDescParser.RULE_backFindCommand = 9;
FileDescParser.RULE_ifCommand = 10;
FileDescParser.RULE_loopCommand = 11;
FileDescParser.RULE_backCommand = 12;
FileDescParser.RULE_gotoCommand = 13;
FileDescParser.RULE_nextCommand = 14;
FileDescParser.RULE_multiByteValue = 15;
FileDescParser.RULE_multiMatchDataValue = 16;
FileDescParser.RULE_matchDataExpr = 17;
FileDescParser.RULE_offsetExpr = 18;
FileDescParser.RULE_dataFormatExpr = 19;
FileDescParser.RULE_textValue = 20;
FileDescParser.RULE_stringValue = 21;
FileDescParser.RULE_numberValue = 22;
FileDescParser.RULE_byteValue = 23;
FileDescParser.RULE_varExpr = 24;
FileDescParser.RULE_calcExpr = 25;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_program;
    }

	EOF() {
	    return this.getToken(FileDescParser.EOF, 0);
	};

	NEWLINE() {
	    return this.getToken(FileDescParser.NEWLINE, 0);
	};

	fileData() {
	    return this.getTypedRuleContext(FileDataContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FileDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_fileData;
    }

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FileDescParser.NEWLINE);
	    } else {
	        return this.getToken(FileDescParser.NEWLINE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitFileData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_line;
    }

	fieldLine() {
	    return this.getTypedRuleContext(FieldLineContext,0);
	};

	commandLine() {
	    return this.getTypedRuleContext(CommandLineContext,0);
	};

	groupLine() {
	    return this.getTypedRuleContext(GroupLineContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_groupLine;
    }

	GROUP_MARK() {
	    return this.getToken(FileDescParser.GROUP_MARK, 0);
	};

	groupCommandExpr() {
	    return this.getTypedRuleContext(GroupCommandExprContext,0);
	};

	textValue() {
	    return this.getTypedRuleContext(TextValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitGroupLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_fieldLine;
    }

	VAR() {
	    return this.getToken(FileDescParser.VAR, 0);
	};

	PART_SPLIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FileDescParser.PART_SPLIT);
	    } else {
	        return this.getToken(FileDescParser.PART_SPLIT, i);
	    }
	};


	offsetExpr() {
	    return this.getTypedRuleContext(OffsetExprContext,0);
	};

	dataFormatExpr() {
	    return this.getTypedRuleContext(DataFormatExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitFieldLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_commandLine;
    }

	backCommand() {
	    return this.getTypedRuleContext(BackCommandContext,0);
	};

	nextCommand() {
	    return this.getTypedRuleContext(NextCommandContext,0);
	};

	gotoCommand() {
	    return this.getTypedRuleContext(GotoCommandContext,0);
	};

	findCommand() {
	    return this.getTypedRuleContext(FindCommandContext,0);
	};

	backFindCommand() {
	    return this.getTypedRuleContext(BackFindCommandContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitCommandLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupCommandExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_groupCommandExpr;
    }

	whileCommand() {
	    return this.getTypedRuleContext(WhileCommandContext,0);
	};

	ifCommand() {
	    return this.getTypedRuleContext(IfCommandContext,0);
	};

	loopCommand() {
	    return this.getTypedRuleContext(LoopCommandContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitGroupCommandExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_whileCommand;
    }

	WHILE() {
	    return this.getToken(FileDescParser.WHILE, 0);
	};

	multiByteValue() {
	    return this.getTypedRuleContext(MultiByteValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitWhileCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FindCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_findCommand;
    }

	FIND() {
	    return this.getToken(FileDescParser.FIND, 0);
	};

	multiByteValue() {
	    return this.getTypedRuleContext(MultiByteValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitFindCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BackFindCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_backFindCommand;
    }

	BACKFIND() {
	    return this.getToken(FileDescParser.BACKFIND, 0);
	};

	multiByteValue() {
	    return this.getTypedRuleContext(MultiByteValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitBackFindCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_ifCommand;
    }

	IF() {
	    return this.getToken(FileDescParser.IF, 0);
	};

	VAR() {
	    return this.getToken(FileDescParser.VAR, 0);
	};

	multiMatchDataValue() {
	    return this.getTypedRuleContext(MultiMatchDataValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitIfCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LoopCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_loopCommand;
    }

	LOOP() {
	    return this.getToken(FileDescParser.LOOP, 0);
	};

	numberValue() {
	    return this.getTypedRuleContext(NumberValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitLoopCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BackCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_backCommand;
    }

	BACK() {
	    return this.getToken(FileDescParser.BACK, 0);
	};

	numberValue() {
	    return this.getTypedRuleContext(NumberValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitBackCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GotoCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_gotoCommand;
    }

	GOTO() {
	    return this.getToken(FileDescParser.GOTO, 0);
	};

	numberValue() {
	    return this.getTypedRuleContext(NumberValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitGotoCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NextCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_nextCommand;
    }

	NEXT() {
	    return this.getToken(FileDescParser.NEXT, 0);
	};

	numberValue() {
	    return this.getTypedRuleContext(NumberValueContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitNextCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiByteValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_multiByteValue;
    }

	byteValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ByteValueContext);
	    } else {
	        return this.getTypedRuleContext(ByteValueContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitMultiByteValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiMatchDataValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_multiMatchDataValue;
    }

	matchDataExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MatchDataExprContext);
	    } else {
	        return this.getTypedRuleContext(MatchDataExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitMultiMatchDataValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MatchDataExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_matchDataExpr;
    }

	BYTE_VALUE() {
	    return this.getToken(FileDescParser.BYTE_VALUE, 0);
	};

	STRING() {
	    return this.getToken(FileDescParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(FileDescParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitMatchDataExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OffsetExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_offsetExpr;
    }

	numberValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberValueContext);
	    } else {
	        return this.getTypedRuleContext(NumberValueContext,i);
	    }
	};

	PART_SPLIT() {
	    return this.getToken(FileDescParser.PART_SPLIT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitOffsetExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DataFormatExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_dataFormatExpr;
    }

	VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FileDescParser.VAR);
	    } else {
	        return this.getToken(FileDescParser.VAR, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitDataFormatExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_textValue;
    }

	varExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarExprContext);
	    } else {
	        return this.getTypedRuleContext(VarExprContext,i);
	    }
	};

	VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FileDescParser.VAR);
	    } else {
	        return this.getToken(FileDescParser.VAR, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FileDescParser.NUMBER);
	    } else {
	        return this.getToken(FileDescParser.NUMBER, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FileDescParser.STRING);
	    } else {
	        return this.getToken(FileDescParser.STRING, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitTextValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_stringValue;
    }

	varExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarExprContext);
	    } else {
	        return this.getTypedRuleContext(VarExprContext,i);
	    }
	};

	VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FileDescParser.VAR);
	    } else {
	        return this.getToken(FileDescParser.VAR, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitStringValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_numberValue;
    }

	varExpr() {
	    return this.getTypedRuleContext(VarExprContext,0);
	};

	NUMBER() {
	    return this.getToken(FileDescParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitNumberValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ByteValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_byteValue;
    }

	varExpr() {
	    return this.getTypedRuleContext(VarExprContext,0);
	};

	BYTE_VALUE() {
	    return this.getToken(FileDescParser.BYTE_VALUE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitByteValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_varExpr;
    }

	calcExpr() {
	    return this.getTypedRuleContext(CalcExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitVarExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CalcExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_calcExpr;
    }

	VAR() {
	    return this.getToken(FileDescParser.VAR, 0);
	};

	NUMBER() {
	    return this.getToken(FileDescParser.NUMBER, 0);
	};

	calcExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CalcExprContext);
	    } else {
	        return this.getTypedRuleContext(CalcExprContext,i);
	    }
	};

	ASTERISK() {
	    return this.getToken(FileDescParser.ASTERISK, 0);
	};

	SLASH() {
	    return this.getToken(FileDescParser.SLASH, 0);
	};

	PLUS() {
	    return this.getToken(FileDescParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(FileDescParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitCalcExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FileDescParser.ProgramContext = ProgramContext; 
FileDescParser.FileDataContext = FileDataContext; 
FileDescParser.LineContext = LineContext; 
FileDescParser.GroupLineContext = GroupLineContext; 
FileDescParser.FieldLineContext = FieldLineContext; 
FileDescParser.CommandLineContext = CommandLineContext; 
FileDescParser.GroupCommandExprContext = GroupCommandExprContext; 
FileDescParser.WhileCommandContext = WhileCommandContext; 
FileDescParser.FindCommandContext = FindCommandContext; 
FileDescParser.BackFindCommandContext = BackFindCommandContext; 
FileDescParser.IfCommandContext = IfCommandContext; 
FileDescParser.LoopCommandContext = LoopCommandContext; 
FileDescParser.BackCommandContext = BackCommandContext; 
FileDescParser.GotoCommandContext = GotoCommandContext; 
FileDescParser.NextCommandContext = NextCommandContext; 
FileDescParser.MultiByteValueContext = MultiByteValueContext; 
FileDescParser.MultiMatchDataValueContext = MultiMatchDataValueContext; 
FileDescParser.MatchDataExprContext = MatchDataExprContext; 
FileDescParser.OffsetExprContext = OffsetExprContext; 
FileDescParser.DataFormatExprContext = DataFormatExprContext; 
FileDescParser.TextValueContext = TextValueContext; 
FileDescParser.StringValueContext = StringValueContext; 
FileDescParser.NumberValueContext = NumberValueContext; 
FileDescParser.ByteValueContext = ByteValueContext; 
FileDescParser.VarExprContext = VarExprContext; 
FileDescParser.CalcExprContext = CalcExprContext; 
