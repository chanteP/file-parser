// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FileDescVisitor from './FileDescVisitor';

const serializedATN = [4,1,32,210,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,3,0,50,8,0,1,0,3,0,53,8,0,1,0,
1,0,1,1,1,1,1,1,5,1,60,8,1,10,1,12,1,63,9,1,1,2,1,2,1,2,3,2,68,8,2,1,3,3,
3,71,8,3,1,3,1,3,5,3,75,8,3,10,3,12,3,78,9,3,1,4,1,4,1,4,1,4,1,4,3,4,85,
8,4,1,5,1,5,1,5,1,5,1,5,3,5,92,8,5,1,6,1,6,1,6,3,6,97,8,6,1,7,1,7,1,7,1,
7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,
1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,3,15,143,8,15,1,16,1,16,1,16,
5,16,148,8,16,10,16,12,16,151,9,16,1,17,1,17,1,17,5,17,156,8,17,10,17,12,
17,159,9,17,1,18,1,18,3,18,163,8,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,3,20,176,8,20,1,21,1,21,1,21,5,21,181,8,21,10,21,12,21,
184,9,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,197,
8,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,205,8,23,10,23,12,23,208,9,23,1,
23,1,76,1,46,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,0,4,1,0,28,30,1,0,7,8,1,0,21,22,1,0,23,24,210,0,49,1,0,0,0,2,56,
1,0,0,0,4,67,1,0,0,0,6,70,1,0,0,0,8,79,1,0,0,0,10,91,1,0,0,0,12,96,1,0,0,
0,14,98,1,0,0,0,16,103,1,0,0,0,18,108,1,0,0,0,20,113,1,0,0,0,22,120,1,0,
0,0,24,125,1,0,0,0,26,130,1,0,0,0,28,135,1,0,0,0,30,142,1,0,0,0,32,144,1,
0,0,0,34,152,1,0,0,0,36,162,1,0,0,0,38,164,1,0,0,0,40,175,1,0,0,0,42,177,
1,0,0,0,44,185,1,0,0,0,46,196,1,0,0,0,48,50,5,27,0,0,49,48,1,0,0,0,49,50,
1,0,0,0,50,52,1,0,0,0,51,53,3,2,1,0,52,51,1,0,0,0,52,53,1,0,0,0,53,54,1,
0,0,0,54,55,5,0,0,1,55,1,1,0,0,0,56,61,3,4,2,0,57,58,5,27,0,0,58,60,3,4,
2,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,3,1,0,0,0,
63,61,1,0,0,0,64,68,3,8,4,0,65,68,3,10,5,0,66,68,3,6,3,0,67,64,1,0,0,0,67,
65,1,0,0,0,67,66,1,0,0,0,68,5,1,0,0,0,69,71,3,12,6,0,70,69,1,0,0,0,70,71,
1,0,0,0,71,72,1,0,0,0,72,76,5,26,0,0,73,75,9,0,0,0,74,73,1,0,0,0,75,78,1,
0,0,0,76,77,1,0,0,0,76,74,1,0,0,0,77,7,1,0,0,0,78,76,1,0,0,0,79,80,5,31,
0,0,80,81,5,25,0,0,81,84,3,40,20,0,82,83,5,25,0,0,83,85,3,42,21,0,84,82,
1,0,0,0,84,85,1,0,0,0,85,9,1,0,0,0,86,92,3,24,12,0,87,92,3,28,14,0,88,92,
3,26,13,0,89,92,3,16,8,0,90,92,3,18,9,0,91,86,1,0,0,0,91,87,1,0,0,0,91,88,
1,0,0,0,91,89,1,0,0,0,91,90,1,0,0,0,92,11,1,0,0,0,93,97,3,14,7,0,94,97,3,
20,10,0,95,97,3,22,11,0,96,93,1,0,0,0,96,94,1,0,0,0,96,95,1,0,0,0,97,13,
1,0,0,0,98,99,5,15,0,0,99,100,5,1,0,0,100,101,3,32,16,0,101,102,5,2,0,0,
102,15,1,0,0,0,103,104,5,16,0,0,104,105,5,1,0,0,105,106,3,32,16,0,106,107,
5,2,0,0,107,17,1,0,0,0,108,109,5,17,0,0,109,110,5,1,0,0,110,111,3,32,16,
0,111,112,5,2,0,0,112,19,1,0,0,0,113,114,5,13,0,0,114,115,5,1,0,0,115,116,
5,31,0,0,116,117,5,3,0,0,117,118,3,34,17,0,118,119,5,2,0,0,119,21,1,0,0,
0,120,121,5,14,0,0,121,122,5,1,0,0,122,123,3,30,15,0,123,124,5,2,0,0,124,
23,1,0,0,0,125,126,5,18,0,0,126,127,5,1,0,0,127,128,3,30,15,0,128,129,5,
2,0,0,129,25,1,0,0,0,130,131,5,20,0,0,131,132,5,1,0,0,132,133,3,30,15,0,
133,134,5,2,0,0,134,27,1,0,0,0,135,136,5,19,0,0,136,137,5,1,0,0,137,138,
3,30,15,0,138,139,5,2,0,0,139,29,1,0,0,0,140,143,3,44,22,0,141,143,5,30,
0,0,142,140,1,0,0,0,142,141,1,0,0,0,143,31,1,0,0,0,144,149,3,36,18,0,145,
146,5,4,0,0,146,148,3,36,18,0,147,145,1,0,0,0,148,151,1,0,0,0,149,147,1,
0,0,0,149,150,1,0,0,0,150,33,1,0,0,0,151,149,1,0,0,0,152,157,3,38,19,0,153,
154,5,4,0,0,154,156,3,38,19,0,155,153,1,0,0,0,156,159,1,0,0,0,157,155,1,
0,0,0,157,158,1,0,0,0,158,35,1,0,0,0,159,157,1,0,0,0,160,163,3,44,22,0,161,
163,5,29,0,0,162,160,1,0,0,0,162,161,1,0,0,0,163,37,1,0,0,0,164,165,7,0,
0,0,165,39,1,0,0,0,166,176,3,30,15,0,167,168,5,5,0,0,168,169,3,30,15,0,169,
170,5,25,0,0,170,171,3,30,15,0,171,172,5,6,0,0,172,176,1,0,0,0,173,174,7,
1,0,0,174,176,3,40,20,0,175,166,1,0,0,0,175,167,1,0,0,0,175,173,1,0,0,0,
176,41,1,0,0,0,177,182,5,31,0,0,178,179,5,4,0,0,179,181,5,31,0,0,180,178,
1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,43,1,0,0,0,184,
182,1,0,0,0,185,186,5,9,0,0,186,187,3,46,23,0,187,188,5,10,0,0,188,45,1,
0,0,0,189,190,6,23,-1,0,190,197,5,31,0,0,191,197,5,30,0,0,192,193,5,1,0,
0,193,194,3,46,23,0,194,195,5,2,0,0,195,197,1,0,0,0,196,189,1,0,0,0,196,
191,1,0,0,0,196,192,1,0,0,0,197,206,1,0,0,0,198,199,10,2,0,0,199,200,7,2,
0,0,200,205,3,46,23,3,201,202,10,1,0,0,202,203,7,3,0,0,203,205,3,46,23,2,
204,198,1,0,0,0,204,201,1,0,0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,
1,0,0,0,207,47,1,0,0,0,208,206,1,0,0,0,18,49,52,61,67,70,76,84,91,96,142,
149,157,162,175,182,196,204,206];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FileDescParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'('", "')'", "'is'", "'|'", "'['", "']'", 
                            "'>'", "'<'", "'${'", "'}'", null, null, "'if'", 
                            "'loop'", "'while'", "'find'", "'backFind'", 
                            "'back'", "'next'", "'goto'", "'*'", "'/'", 
                            "'+'", "'-'", "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "BLOCK_COMMENT", "LINE_COMMENT", 
                             "IF", "LOOP", "WHILE", "FIND", "BACKFIND", 
                             "BACK", "NEXT", "GOTO", "ASTERISK", "SLASH", 
                             "PLUS", "MINUS", "PART_SPLIT", "GROUP_MARK", 
                             "NEWLINE", "DATA_STRING", "BYTE_VALUE", "NUMBER", 
                             "VAR", "WHITESPACE" ];
    static ruleNames = [ "program", "fileData", "line", "groupLine", "fieldLine", 
                         "commandLine", "groupCommandExpr", "whileCommand", 
                         "findCommand", "backFindCommand", "ifCommand", 
                         "loopCommand", "backCommand", "gotoCommand", "nextCommand", 
                         "numberValue", "multiByteValue", "multiMatchDataValue", 
                         "byteValue", "matchDataExpr", "offsetExpr", "dataFormatExpr", 
                         "varExpr", "calcExpr" ];

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
    	case 23:
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
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 48;
	            this.match(FileDescParser.NEWLINE);
	        }

	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 2216681472) !== 0)) {
	            this.state = 51;
	            this.fileData();
	        }

	        this.state = 54;
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
	        this.state = 56;
	        this.line();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 57;
	            this.match(FileDescParser.NEWLINE);
	            this.state = 58;
	            this.line();
	            this.state = 63;
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.fieldLine();
	            break;
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.commandLine();
	            break;
	        case 13:
	        case 14:
	        case 15:
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
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
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 57344) !== 0)) {
	            this.state = 69;
	            this.groupCommandExpr();
	        }

	        this.state = 72;
	        this.match(FileDescParser.GROUP_MARK);
	        this.state = 76;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 73;
	                this.matchWildcard(); 
	            }
	            this.state = 78;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	        this.state = 79;
	        this.match(FileDescParser.VAR);
	        this.state = 80;
	        this.match(FileDescParser.PART_SPLIT);
	        this.state = 81;
	        this.offsetExpr();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 82;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 83;
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
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.backCommand();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.nextCommand();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.gotoCommand();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.findCommand();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 90;
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
	        this.state = 96;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            this.whileCommand();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.ifCommand();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
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
	        this.state = 98;
	        this.match(FileDescParser.WHILE);
	        this.state = 99;
	        this.match(FileDescParser.T__0);
	        this.state = 100;
	        this.multiByteValue();
	        this.state = 101;
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
	        this.state = 103;
	        this.match(FileDescParser.FIND);
	        this.state = 104;
	        this.match(FileDescParser.T__0);
	        this.state = 105;
	        this.multiByteValue();
	        this.state = 106;
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
	        this.state = 108;
	        this.match(FileDescParser.BACKFIND);
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
	    this.enterRule(localctx, 20, FileDescParser.RULE_ifCommand);
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
	    this.enterRule(localctx, 22, FileDescParser.RULE_loopCommand);
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
	    this.enterRule(localctx, 24, FileDescParser.RULE_backCommand);
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
	    this.enterRule(localctx, 26, FileDescParser.RULE_gotoCommand);
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
	    this.enterRule(localctx, 28, FileDescParser.RULE_nextCommand);
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



	numberValue() {
	    let localctx = new NumberValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FileDescParser.RULE_numberValue);
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.varExpr();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 141;
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



	multiByteValue() {
	    let localctx = new MultiByteValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FileDescParser.RULE_multiByteValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.byteValue();
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 145;
	            this.match(FileDescParser.T__3);
	            this.state = 146;
	            this.byteValue();
	            this.state = 151;
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
	    this.enterRule(localctx, 34, FileDescParser.RULE_multiMatchDataValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.matchDataExpr();
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 153;
	            this.match(FileDescParser.T__3);
	            this.state = 154;
	            this.matchDataExpr();
	            this.state = 159;
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



	byteValue() {
	    let localctx = new ByteValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FileDescParser.RULE_byteValue);
	    try {
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.varExpr();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
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



	matchDataExpr() {
	    let localctx = new MatchDataExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, FileDescParser.RULE_matchDataExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
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
	    this.enterRule(localctx, 40, FileDescParser.RULE_offsetExpr);
	    var _la = 0; // Token type
	    try {
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.numberValue();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.match(FileDescParser.T__4);
	            this.state = 168;
	            this.numberValue();
	            this.state = 169;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 170;
	            this.numberValue();
	            this.state = 171;
	            this.match(FileDescParser.T__5);
	            break;
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 173;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 174;
	            this.offsetExpr();
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
	    this.enterRule(localctx, 42, FileDescParser.RULE_dataFormatExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(FileDescParser.VAR);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 178;
	            this.match(FileDescParser.T__3);
	            this.state = 179;
	            this.match(FileDescParser.VAR);
	            this.state = 184;
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



	varExpr() {
	    let localctx = new VarExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, FileDescParser.RULE_varExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(FileDescParser.T__8);
	        this.state = 186;
	        this.calcExpr(0);
	        this.state = 187;
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
	    const _startState = 46;
	    this.enterRecursionRule(localctx, 46, FileDescParser.RULE_calcExpr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.state = 190;
	            this.match(FileDescParser.VAR);
	            break;
	        case 30:
	            this.state = 191;
	            this.match(FileDescParser.NUMBER);
	            break;
	        case 1:
	            this.state = 192;
	            this.match(FileDescParser.T__0);
	            this.state = 193;
	            this.calcExpr(0);
	            this.state = 194;
	            this.match(FileDescParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 206;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 204;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CalcExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FileDescParser.RULE_calcExpr);
	                    this.state = 198;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 199;
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 200;
	                    this.calcExpr(3);
	                    break;

	                case 2:
	                    localctx = new CalcExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FileDescParser.RULE_calcExpr);
	                    this.state = 201;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 202;
	                    _la = this._input.LA(1);
	                    if(!(_la===23 || _la===24)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 203;
	                    this.calcExpr(2);
	                    break;

	                } 
	            }
	            this.state = 208;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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
FileDescParser.DATA_STRING = 28;
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
FileDescParser.RULE_numberValue = 15;
FileDescParser.RULE_multiByteValue = 16;
FileDescParser.RULE_multiMatchDataValue = 17;
FileDescParser.RULE_byteValue = 18;
FileDescParser.RULE_matchDataExpr = 19;
FileDescParser.RULE_offsetExpr = 20;
FileDescParser.RULE_dataFormatExpr = 21;
FileDescParser.RULE_varExpr = 22;
FileDescParser.RULE_calcExpr = 23;

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

	DATA_STRING() {
	    return this.getToken(FileDescParser.DATA_STRING, 0);
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

	offsetExpr() {
	    return this.getTypedRuleContext(OffsetExprContext,0);
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
FileDescParser.NumberValueContext = NumberValueContext; 
FileDescParser.MultiByteValueContext = MultiByteValueContext; 
FileDescParser.MultiMatchDataValueContext = MultiMatchDataValueContext; 
FileDescParser.ByteValueContext = ByteValueContext; 
FileDescParser.MatchDataExprContext = MatchDataExprContext; 
FileDescParser.OffsetExprContext = OffsetExprContext; 
FileDescParser.DataFormatExprContext = DataFormatExprContext; 
FileDescParser.VarExprContext = VarExprContext; 
FileDescParser.CalcExprContext = CalcExprContext; 
