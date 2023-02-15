// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FileDescVisitor from './FileDescVisitor';

const serializedATN = [4,1,32,244,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,3,0,60,8,0,1,0,3,0,63,8,0,1,0,3,0,66,8,0,1,0,1,0,1,1,
1,1,1,1,5,1,73,8,1,10,1,12,1,76,9,1,1,2,1,2,1,2,3,2,81,8,2,1,3,3,3,84,8,
3,1,3,1,3,3,3,88,8,3,1,4,1,4,1,4,1,4,1,4,3,4,95,8,4,1,5,1,5,1,5,1,5,1,5,
3,5,102,8,5,1,6,1,6,1,6,3,6,107,8,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,
14,1,14,1,14,1,15,1,15,1,15,5,15,154,8,15,10,15,12,15,157,9,15,1,16,1,16,
1,16,5,16,162,8,16,10,16,12,16,165,9,16,1,17,1,17,1,17,3,17,170,8,17,1,18,
3,18,173,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,182,8,18,1,19,1,19,
1,19,5,19,187,8,19,10,19,12,19,190,9,19,1,20,1,20,1,20,1,20,4,20,196,8,20,
11,20,12,20,197,1,21,1,21,4,21,202,8,21,11,21,12,21,203,1,22,1,22,3,22,208,
8,22,1,23,1,23,3,23,212,8,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,3,25,225,8,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,233,8,25,10,25,
12,25,236,9,25,1,26,1,26,1,27,1,27,1,28,1,28,1,28,0,1,50,29,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,0,3,
1,0,5,6,1,0,21,22,1,0,23,24,248,0,59,1,0,0,0,2,69,1,0,0,0,4,80,1,0,0,0,6,
83,1,0,0,0,8,89,1,0,0,0,10,101,1,0,0,0,12,106,1,0,0,0,14,108,1,0,0,0,16,
113,1,0,0,0,18,120,1,0,0,0,20,125,1,0,0,0,22,130,1,0,0,0,24,135,1,0,0,0,
26,140,1,0,0,0,28,145,1,0,0,0,30,150,1,0,0,0,32,158,1,0,0,0,34,169,1,0,0,
0,36,172,1,0,0,0,38,183,1,0,0,0,40,195,1,0,0,0,42,201,1,0,0,0,44,207,1,0,
0,0,46,211,1,0,0,0,48,213,1,0,0,0,50,224,1,0,0,0,52,237,1,0,0,0,54,239,1,
0,0,0,56,241,1,0,0,0,58,60,5,27,0,0,59,58,1,0,0,0,59,60,1,0,0,0,60,62,1,
0,0,0,61,63,3,2,1,0,62,61,1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,66,5,27,
0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,68,5,0,0,1,68,1,1,0,0,0,
69,74,3,4,2,0,70,71,5,27,0,0,71,73,3,4,2,0,72,70,1,0,0,0,73,76,1,0,0,0,74,
72,1,0,0,0,74,75,1,0,0,0,75,3,1,0,0,0,76,74,1,0,0,0,77,81,3,8,4,0,78,81,
3,10,5,0,79,81,3,6,3,0,80,77,1,0,0,0,80,78,1,0,0,0,80,79,1,0,0,0,81,5,1,
0,0,0,82,84,3,12,6,0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,85,87,5,26,
0,0,86,88,3,40,20,0,87,86,1,0,0,0,87,88,1,0,0,0,88,7,1,0,0,0,89,90,5,31,
0,0,90,91,5,25,0,0,91,94,3,36,18,0,92,93,5,25,0,0,93,95,3,38,19,0,94,92,
1,0,0,0,94,95,1,0,0,0,95,9,1,0,0,0,96,102,3,20,10,0,97,102,3,24,12,0,98,
102,3,22,11,0,99,102,3,26,13,0,100,102,3,28,14,0,101,96,1,0,0,0,101,97,1,
0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,11,1,0,0,0,103,107,
3,14,7,0,104,107,3,16,8,0,105,107,3,18,9,0,106,103,1,0,0,0,106,104,1,0,0,
0,106,105,1,0,0,0,107,13,1,0,0,0,108,109,5,15,0,0,109,110,5,1,0,0,110,111,
3,30,15,0,111,112,5,2,0,0,112,15,1,0,0,0,113,114,5,13,0,0,114,115,5,1,0,
0,115,116,5,31,0,0,116,117,5,3,0,0,117,118,3,32,16,0,118,119,5,2,0,0,119,
17,1,0,0,0,120,121,5,14,0,0,121,122,5,1,0,0,122,123,3,44,22,0,123,124,5,
2,0,0,124,19,1,0,0,0,125,126,5,18,0,0,126,127,5,1,0,0,127,128,3,44,22,0,
128,129,5,2,0,0,129,21,1,0,0,0,130,131,5,20,0,0,131,132,5,1,0,0,132,133,
3,44,22,0,133,134,5,2,0,0,134,23,1,0,0,0,135,136,5,19,0,0,136,137,5,1,0,
0,137,138,3,44,22,0,138,139,5,2,0,0,139,25,1,0,0,0,140,141,5,16,0,0,141,
142,5,1,0,0,142,143,3,30,15,0,143,144,5,2,0,0,144,27,1,0,0,0,145,146,5,17,
0,0,146,147,5,1,0,0,147,148,3,30,15,0,148,149,5,2,0,0,149,29,1,0,0,0,150,
155,3,46,23,0,151,152,5,4,0,0,152,154,3,46,23,0,153,151,1,0,0,0,154,157,
1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,31,1,0,0,0,157,155,1,0,0,0,158,
163,3,34,17,0,159,160,5,4,0,0,160,162,3,34,17,0,161,159,1,0,0,0,162,165,
1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,33,1,0,0,0,165,163,1,0,0,0,166,
170,3,54,27,0,167,170,3,52,26,0,168,170,3,56,28,0,169,166,1,0,0,0,169,167,
1,0,0,0,169,168,1,0,0,0,170,35,1,0,0,0,171,173,7,0,0,0,172,171,1,0,0,0,172,
173,1,0,0,0,173,181,1,0,0,0,174,182,3,44,22,0,175,176,5,7,0,0,176,177,3,
44,22,0,177,178,5,25,0,0,178,179,3,44,22,0,179,180,5,8,0,0,180,182,1,0,0,
0,181,174,1,0,0,0,181,175,1,0,0,0,182,37,1,0,0,0,183,188,5,31,0,0,184,185,
5,4,0,0,185,187,5,31,0,0,186,184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,
188,189,1,0,0,0,189,39,1,0,0,0,190,188,1,0,0,0,191,196,3,48,24,0,192,196,
5,31,0,0,193,196,3,56,28,0,194,196,3,52,26,0,195,191,1,0,0,0,195,192,1,0,
0,0,195,193,1,0,0,0,195,194,1,0,0,0,196,197,1,0,0,0,197,195,1,0,0,0,197,
198,1,0,0,0,198,41,1,0,0,0,199,202,3,48,24,0,200,202,5,31,0,0,201,199,1,
0,0,0,201,200,1,0,0,0,202,203,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,
43,1,0,0,0,205,208,3,48,24,0,206,208,3,56,28,0,207,205,1,0,0,0,207,206,1,
0,0,0,208,45,1,0,0,0,209,212,3,48,24,0,210,212,3,54,27,0,211,209,1,0,0,0,
211,210,1,0,0,0,212,47,1,0,0,0,213,214,5,9,0,0,214,215,3,50,25,0,215,216,
5,10,0,0,216,49,1,0,0,0,217,218,6,25,-1,0,218,225,5,31,0,0,219,225,3,56,
28,0,220,221,5,1,0,0,221,222,3,50,25,0,222,223,5,2,0,0,223,225,1,0,0,0,224,
217,1,0,0,0,224,219,1,0,0,0,224,220,1,0,0,0,225,234,1,0,0,0,226,227,10,2,
0,0,227,228,7,1,0,0,228,233,3,50,25,3,229,230,10,1,0,0,230,231,7,2,0,0,231,
233,3,50,25,2,232,226,1,0,0,0,232,229,1,0,0,0,233,236,1,0,0,0,234,232,1,
0,0,0,234,235,1,0,0,0,235,51,1,0,0,0,236,234,1,0,0,0,237,238,5,28,0,0,238,
53,1,0,0,0,239,240,5,29,0,0,240,55,1,0,0,0,241,242,5,30,0,0,242,57,1,0,0,
0,25,59,62,65,74,80,83,87,94,101,106,155,163,169,172,181,188,195,197,201,
203,207,211,224,232,234];


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
                         "ifCommand", "loopCommand", "backCommand", "gotoCommand", 
                         "nextCommand", "findCommand", "backFindCommand", 
                         "multiByteValue", "multiMatchDataValue", "matchDataExpr", 
                         "offsetExpr", "dataFormatExpr", "textValue", "stringValue", 
                         "numberValue", "byteValue", "varExpr", "calcExpr", 
                         "string", "byteData", "number" ];

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
	        this.state = 59;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 58;
	            this.match(FileDescParser.NEWLINE);

	        }
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 2216681472) !== 0)) {
	            this.state = 61;
	            this.fileData();
	        }

	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 64;
	            this.match(FileDescParser.NEWLINE);
	        }

	        this.state = 67;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.line();
	        this.state = 74;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 70;
	                this.match(FileDescParser.NEWLINE);
	                this.state = 71;
	                this.line(); 
	            }
	            this.state = 76;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.fieldLine();
	            break;
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.commandLine();
	            break;
	        case 13:
	        case 14:
	        case 15:
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 79;
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
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 57344) !== 0)) {
	            this.state = 82;
	            this.groupCommandExpr();
	        }

	        this.state = 85;
	        this.match(FileDescParser.GROUP_MARK);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 3489661440) !== 0)) {
	            this.state = 86;
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
	        this.state = 89;
	        this.match(FileDescParser.VAR);
	        this.state = 90;
	        this.match(FileDescParser.PART_SPLIT);
	        this.state = 91;
	        this.offsetExpr();
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 92;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 93;
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
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.backCommand();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.nextCommand();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.gotoCommand();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 99;
	            this.findCommand();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 100;
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
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.whileCommand();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.ifCommand();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 105;
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
	        this.state = 108;
	        this.match(FileDescParser.WHILE);
	        this.state = 109;
	        this.match(FileDescParser.T__0);
	        this.state = 110;
	        this.multiByteValue();
	        this.state = 111;
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
	    this.enterRule(localctx, 16, FileDescParser.RULE_ifCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(FileDescParser.IF);
	        this.state = 114;
	        this.match(FileDescParser.T__0);
	        this.state = 115;
	        this.match(FileDescParser.VAR);
	        this.state = 116;
	        this.match(FileDescParser.T__2);
	        this.state = 117;
	        this.multiMatchDataValue();
	        this.state = 118;
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
	    this.enterRule(localctx, 18, FileDescParser.RULE_loopCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(FileDescParser.LOOP);
	        this.state = 121;
	        this.match(FileDescParser.T__0);
	        this.state = 122;
	        this.numberValue();
	        this.state = 123;
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
	    this.enterRule(localctx, 20, FileDescParser.RULE_backCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(FileDescParser.BACK);
	        this.state = 126;
	        this.match(FileDescParser.T__0);
	        this.state = 127;
	        this.numberValue();
	        this.state = 128;
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
	    this.enterRule(localctx, 22, FileDescParser.RULE_gotoCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(FileDescParser.GOTO);
	        this.state = 131;
	        this.match(FileDescParser.T__0);
	        this.state = 132;
	        this.numberValue();
	        this.state = 133;
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
	    this.enterRule(localctx, 24, FileDescParser.RULE_nextCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(FileDescParser.NEXT);
	        this.state = 136;
	        this.match(FileDescParser.T__0);
	        this.state = 137;
	        this.numberValue();
	        this.state = 138;
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
	    this.enterRule(localctx, 26, FileDescParser.RULE_findCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(FileDescParser.FIND);
	        this.state = 141;
	        this.match(FileDescParser.T__0);
	        this.state = 142;
	        this.multiByteValue();
	        this.state = 143;
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
	    this.enterRule(localctx, 28, FileDescParser.RULE_backFindCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(FileDescParser.BACKFIND);
	        this.state = 146;
	        this.match(FileDescParser.T__0);
	        this.state = 147;
	        this.multiByteValue();
	        this.state = 148;
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
	        this.state = 150;
	        this.byteValue();
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 151;
	            this.match(FileDescParser.T__3);
	            this.state = 152;
	            this.byteValue();
	            this.state = 157;
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
	        this.state = 158;
	        this.matchDataExpr();
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 159;
	            this.match(FileDescParser.T__3);
	            this.state = 160;
	            this.matchDataExpr();
	            this.state = 165;
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
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.byteData();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.string();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 168;
	            this.number();
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



	offsetExpr() {
	    let localctx = new OffsetExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FileDescParser.RULE_offsetExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===6) {
	            this.state = 171;
	            _la = this._input.LA(1);
	            if(!(_la===5 || _la===6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 181;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 30:
	            this.state = 174;
	            this.numberValue();
	            break;
	        case 7:
	            this.state = 175;
	            this.match(FileDescParser.T__6);
	            this.state = 176;
	            this.numberValue();
	            this.state = 177;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 178;
	            this.numberValue();
	            this.state = 179;
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
	        this.state = 183;
	        this.match(FileDescParser.VAR);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 184;
	            this.match(FileDescParser.T__3);
	            this.state = 185;
	            this.match(FileDescParser.VAR);
	            this.state = 190;
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
	        this.state = 195; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 195;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 9:
	                this.state = 191;
	                this.varExpr();
	                break;
	            case 31:
	                this.state = 192;
	                this.match(FileDescParser.VAR);
	                break;
	            case 30:
	                this.state = 193;
	                this.number();
	                break;
	            case 28:
	                this.state = 194;
	                this.string();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 197; 
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
	        this.state = 201; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 201;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 9:
	                this.state = 199;
	                this.varExpr();
	                break;
	            case 31:
	                this.state = 200;
	                this.match(FileDescParser.VAR);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 203; 
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
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this.varExpr();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 206;
	            this.number();
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
	        this.state = 211;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 209;
	            this.varExpr();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 210;
	            this.byteData();
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
	        this.state = 213;
	        this.match(FileDescParser.T__8);
	        this.state = 214;
	        this.calcExpr(0);
	        this.state = 215;
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
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.state = 218;
	            this.match(FileDescParser.VAR);
	            break;
	        case 30:
	            this.state = 219;
	            this.number();
	            break;
	        case 1:
	            this.state = 220;
	            this.match(FileDescParser.T__0);
	            this.state = 221;
	            this.calcExpr(0);
	            this.state = 222;
	            this.match(FileDescParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 234;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 232;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CalcExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FileDescParser.RULE_calcExpr);
	                    this.state = 226;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 227;
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 228;
	                    this.calcExpr(3);
	                    break;

	                case 2:
	                    localctx = new CalcExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FileDescParser.RULE_calcExpr);
	                    this.state = 229;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 230;
	                    _la = this._input.LA(1);
	                    if(!(_la===23 || _la===24)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 231;
	                    this.calcExpr(2);
	                    break;

	                } 
	            }
	            this.state = 236;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, FileDescParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(FileDescParser.STRING);
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



	byteData() {
	    let localctx = new ByteDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, FileDescParser.RULE_byteData);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(FileDescParser.BYTE_VALUE);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, FileDescParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(FileDescParser.NUMBER);
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
FileDescParser.RULE_ifCommand = 8;
FileDescParser.RULE_loopCommand = 9;
FileDescParser.RULE_backCommand = 10;
FileDescParser.RULE_gotoCommand = 11;
FileDescParser.RULE_nextCommand = 12;
FileDescParser.RULE_findCommand = 13;
FileDescParser.RULE_backFindCommand = 14;
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
FileDescParser.RULE_string = 26;
FileDescParser.RULE_byteData = 27;
FileDescParser.RULE_number = 28;

export class ProgramContext extends antlr4.ParserRuleContext {

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



export class FileDataContext extends antlr4.ParserRuleContext {

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



export class LineContext extends antlr4.ParserRuleContext {

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



export class GroupLineContext extends antlr4.ParserRuleContext {

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



export class FieldLineContext extends antlr4.ParserRuleContext {

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



export class CommandLineContext extends antlr4.ParserRuleContext {

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



export class GroupCommandExprContext extends antlr4.ParserRuleContext {

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



export class WhileCommandContext extends antlr4.ParserRuleContext {

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



export class IfCommandContext extends antlr4.ParserRuleContext {

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



export class LoopCommandContext extends antlr4.ParserRuleContext {

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



export class BackCommandContext extends antlr4.ParserRuleContext {

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



export class GotoCommandContext extends antlr4.ParserRuleContext {

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



export class NextCommandContext extends antlr4.ParserRuleContext {

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



export class FindCommandContext extends antlr4.ParserRuleContext {

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



export class BackFindCommandContext extends antlr4.ParserRuleContext {

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



export class MultiByteValueContext extends antlr4.ParserRuleContext {

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



export class MultiMatchDataValueContext extends antlr4.ParserRuleContext {

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



export class MatchDataExprContext extends antlr4.ParserRuleContext {

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

	byteData() {
	    return this.getTypedRuleContext(ByteDataContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitMatchDataExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class OffsetExprContext extends antlr4.ParserRuleContext {

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



export class DataFormatExprContext extends antlr4.ParserRuleContext {

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



export class TextValueContext extends antlr4.ParserRuleContext {

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


	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
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



export class StringValueContext extends antlr4.ParserRuleContext {

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



export class NumberValueContext extends antlr4.ParserRuleContext {

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

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitNumberValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class ByteValueContext extends antlr4.ParserRuleContext {

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

	byteData() {
	    return this.getTypedRuleContext(ByteDataContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitByteValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class VarExprContext extends antlr4.ParserRuleContext {

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



export class CalcExprContext extends antlr4.ParserRuleContext {

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

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
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



export class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_string;
    }

	STRING() {
	    return this.getToken(FileDescParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class ByteDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_byteData;
    }

	BYTE_VALUE() {
	    return this.getToken(FileDescParser.BYTE_VALUE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitByteData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(FileDescParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitNumber(this);
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
FileDescParser.IfCommandContext = IfCommandContext; 
FileDescParser.LoopCommandContext = LoopCommandContext; 
FileDescParser.BackCommandContext = BackCommandContext; 
FileDescParser.GotoCommandContext = GotoCommandContext; 
FileDescParser.NextCommandContext = NextCommandContext; 
FileDescParser.FindCommandContext = FindCommandContext; 
FileDescParser.BackFindCommandContext = BackFindCommandContext; 
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
FileDescParser.StringContext = StringContext; 
FileDescParser.ByteDataContext = ByteDataContext; 
FileDescParser.NumberContext = NumberContext; 
