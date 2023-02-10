// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FileDescVisitor from './FileDescVisitor';

const serializedATN = [4,1,31,195,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,1,1,1,1,1,3,1,54,8,1,
1,1,1,1,1,2,3,2,59,8,2,1,2,1,2,5,2,63,8,2,10,2,12,2,66,9,2,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,3,3,77,8,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,85,8,4,1,5,
1,5,1,5,3,5,90,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,
8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,3,
14,136,8,14,1,15,1,15,1,15,5,15,141,8,15,10,15,12,15,144,9,15,1,16,1,16,
3,16,148,8,16,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,
161,8,18,1,19,1,19,1,19,5,19,166,8,19,10,19,12,19,169,9,19,1,20,1,20,1,20,
1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,182,8,21,1,21,1,21,1,21,1,21,
1,21,1,21,5,21,190,8,21,10,21,12,21,193,9,21,1,21,1,64,1,42,22,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,4,1,0,27,29,1,0,6,7,
1,0,20,21,1,0,22,23,195,0,47,1,0,0,0,2,53,1,0,0,0,4,58,1,0,0,0,6,76,1,0,
0,0,8,84,1,0,0,0,10,89,1,0,0,0,12,91,1,0,0,0,14,96,1,0,0,0,16,101,1,0,0,
0,18,106,1,0,0,0,20,113,1,0,0,0,22,118,1,0,0,0,24,123,1,0,0,0,26,128,1,0,
0,0,28,135,1,0,0,0,30,137,1,0,0,0,32,147,1,0,0,0,34,149,1,0,0,0,36,160,1,
0,0,0,38,162,1,0,0,0,40,170,1,0,0,0,42,181,1,0,0,0,44,46,3,2,1,0,45,44,1,
0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,1,1,0,0,0,49,47,1,0,0,
0,50,54,3,4,2,0,51,54,3,6,3,0,52,54,3,8,4,0,53,50,1,0,0,0,53,51,1,0,0,0,
53,52,1,0,0,0,54,55,1,0,0,0,55,56,5,26,0,0,56,3,1,0,0,0,57,59,3,10,5,0,58,
57,1,0,0,0,58,59,1,0,0,0,59,60,1,0,0,0,60,64,5,25,0,0,61,63,9,0,0,0,62,61,
1,0,0,0,63,66,1,0,0,0,64,65,1,0,0,0,64,62,1,0,0,0,65,5,1,0,0,0,66,64,1,0,
0,0,67,68,5,30,0,0,68,69,5,24,0,0,69,77,3,36,18,0,70,71,5,30,0,0,71,72,5,
24,0,0,72,73,3,36,18,0,73,74,5,24,0,0,74,75,3,38,19,0,75,77,1,0,0,0,76,67,
1,0,0,0,76,70,1,0,0,0,77,7,1,0,0,0,78,85,3,22,11,0,79,85,3,26,13,0,80,85,
3,24,12,0,81,85,3,24,12,0,82,85,3,14,7,0,83,85,3,16,8,0,84,78,1,0,0,0,84,
79,1,0,0,0,84,80,1,0,0,0,84,81,1,0,0,0,84,82,1,0,0,0,84,83,1,0,0,0,85,9,
1,0,0,0,86,90,3,12,6,0,87,90,3,18,9,0,88,90,3,20,10,0,89,86,1,0,0,0,89,87,
1,0,0,0,89,88,1,0,0,0,90,11,1,0,0,0,91,92,5,14,0,0,92,93,5,1,0,0,93,94,3,
30,15,0,94,95,5,2,0,0,95,13,1,0,0,0,96,97,5,15,0,0,97,98,5,1,0,0,98,99,3,
30,15,0,99,100,5,2,0,0,100,15,1,0,0,0,101,102,5,16,0,0,102,103,5,1,0,0,103,
104,3,30,15,0,104,105,5,2,0,0,105,17,1,0,0,0,106,107,5,12,0,0,107,108,5,
1,0,0,108,109,5,30,0,0,109,110,5,24,0,0,110,111,3,34,17,0,111,112,5,2,0,
0,112,19,1,0,0,0,113,114,5,13,0,0,114,115,5,1,0,0,115,116,3,28,14,0,116,
117,5,2,0,0,117,21,1,0,0,0,118,119,5,17,0,0,119,120,5,1,0,0,120,121,3,28,
14,0,121,122,5,2,0,0,122,23,1,0,0,0,123,124,5,19,0,0,124,125,5,1,0,0,125,
126,3,28,14,0,126,127,5,2,0,0,127,25,1,0,0,0,128,129,5,18,0,0,129,130,5,
1,0,0,130,131,3,28,14,0,131,132,5,2,0,0,132,27,1,0,0,0,133,136,3,40,20,0,
134,136,5,29,0,0,135,133,1,0,0,0,135,134,1,0,0,0,136,29,1,0,0,0,137,142,
3,32,16,0,138,139,5,3,0,0,139,141,3,32,16,0,140,138,1,0,0,0,141,144,1,0,
0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,31,1,0,0,0,144,142,1,0,0,0,145,148,
3,40,20,0,146,148,5,28,0,0,147,145,1,0,0,0,147,146,1,0,0,0,148,33,1,0,0,
0,149,150,7,0,0,0,150,35,1,0,0,0,151,161,3,40,20,0,152,153,5,4,0,0,153,154,
3,40,20,0,154,155,5,24,0,0,155,156,3,40,20,0,156,157,5,5,0,0,157,161,1,0,
0,0,158,159,7,1,0,0,159,161,3,36,18,0,160,151,1,0,0,0,160,152,1,0,0,0,160,
158,1,0,0,0,161,37,1,0,0,0,162,167,5,30,0,0,163,164,5,3,0,0,164,166,5,30,
0,0,165,163,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,
39,1,0,0,0,169,167,1,0,0,0,170,171,5,8,0,0,171,172,3,42,21,0,172,173,5,9,
0,0,173,41,1,0,0,0,174,175,6,21,-1,0,175,182,5,30,0,0,176,182,5,29,0,0,177,
178,5,1,0,0,178,179,3,42,21,0,179,180,5,2,0,0,180,182,1,0,0,0,181,174,1,
0,0,0,181,176,1,0,0,0,181,177,1,0,0,0,182,191,1,0,0,0,183,184,10,2,0,0,184,
185,7,2,0,0,185,190,3,42,21,3,186,187,10,1,0,0,187,188,7,3,0,0,188,190,3,
42,21,2,189,183,1,0,0,0,189,186,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,
191,192,1,0,0,0,192,43,1,0,0,0,193,191,1,0,0,0,15,47,53,58,64,76,84,89,135,
142,147,160,167,181,189,191];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FileDescParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'('", "')'", "'|'", "'['", "']'", "'>'", 
                            "'<'", "'${'", "'}'", null, null, "'if'", "'loop'", 
                            "'while'", "'find'", "'backFind'", "'back'", 
                            "'next'", "'goto'", "'*'", "'/'", "'+'", "'-'", 
                            "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "BLOCK_COMMENT", "LINE_COMMENT", 
                             "IF", "LOOP", "WHILE", "FIND", "BACKFIND", 
                             "BACK", "NEXT", "GOTO", "ASTERISK", "SLASH", 
                             "PLUS", "MINUS", "PART_SPLIT", "GROUP_MARK", 
                             "NEWLINE", "DATA_STRING", "BYTE_VALUE", "NUMBER", 
                             "VAR", "WHITESPACE" ];
    static ruleNames = [ "file", "line", "groupLine", "fieldLine", "commandLine", 
                         "groupCommandExpr", "whileCommand", "findCommand", 
                         "backFindCommand", "ifCommand", "loopCommand", 
                         "backCommand", "gotoCommand", "nextCommand", "numberValue", 
                         "multiByteValue", "byteValue", "matchDataExpr", 
                         "offsetExpr", "dataFormatExpr", "varExpr", "calcExpr" ];

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
    	case 21:
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




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FileDescParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 1108340736) !== 0)) {
	            this.state = 44;
	            this.line();
	            this.state = 49;
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
	    this.enterRule(localctx, 2, FileDescParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 14:
	        case 25:
	            this.state = 50;
	            this.groupLine();
	            break;
	        case 30:
	            this.state = 51;
	            this.fieldLine();
	            break;
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	            this.state = 52;
	            this.commandLine();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 55;
	        this.match(FileDescParser.NEWLINE);
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
	    this.enterRule(localctx, 4, FileDescParser.RULE_groupLine);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 28672) !== 0)) {
	            this.state = 57;
	            this.groupCommandExpr();
	        }

	        this.state = 60;
	        this.match(FileDescParser.GROUP_MARK);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 61;
	                this.matchWildcard(); 
	            }
	            this.state = 66;
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



	fieldLine() {
	    let localctx = new FieldLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FileDescParser.RULE_fieldLine);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.match(FileDescParser.VAR);
	            this.state = 68;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 69;
	            this.offsetExpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.match(FileDescParser.VAR);
	            this.state = 71;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 72;
	            this.offsetExpr();
	            this.state = 73;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 74;
	            this.dataFormatExpr();
	            break;

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
	    this.enterRule(localctx, 8, FileDescParser.RULE_commandLine);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.backCommand();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.nextCommand();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 80;
	            this.gotoCommand();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 81;
	            this.gotoCommand();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 82;
	            this.findCommand();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 83;
	            this.backFindCommand();
	            break;

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
	    this.enterRule(localctx, 10, FileDescParser.RULE_groupCommandExpr);
	    try {
	        this.state = 89;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.whileCommand();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.ifCommand();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
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
	    this.enterRule(localctx, 12, FileDescParser.RULE_whileCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(FileDescParser.WHILE);
	        this.state = 92;
	        this.match(FileDescParser.T__0);
	        this.state = 93;
	        this.multiByteValue();
	        this.state = 94;
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
	    this.enterRule(localctx, 14, FileDescParser.RULE_findCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(FileDescParser.FIND);
	        this.state = 97;
	        this.match(FileDescParser.T__0);
	        this.state = 98;
	        this.multiByteValue();
	        this.state = 99;
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
	    this.enterRule(localctx, 16, FileDescParser.RULE_backFindCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(FileDescParser.BACKFIND);
	        this.state = 102;
	        this.match(FileDescParser.T__0);
	        this.state = 103;
	        this.multiByteValue();
	        this.state = 104;
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
	    this.enterRule(localctx, 18, FileDescParser.RULE_ifCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(FileDescParser.IF);
	        this.state = 107;
	        this.match(FileDescParser.T__0);
	        this.state = 108;
	        this.match(FileDescParser.VAR);
	        this.state = 109;
	        this.match(FileDescParser.PART_SPLIT);
	        this.state = 110;
	        this.matchDataExpr();
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



	loopCommand() {
	    let localctx = new LoopCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FileDescParser.RULE_loopCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(FileDescParser.LOOP);
	        this.state = 114;
	        this.match(FileDescParser.T__0);
	        this.state = 115;
	        this.numberValue();
	        this.state = 116;
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
	    this.enterRule(localctx, 22, FileDescParser.RULE_backCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(FileDescParser.BACK);
	        this.state = 119;
	        this.match(FileDescParser.T__0);
	        this.state = 120;
	        this.numberValue();
	        this.state = 121;
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
	    this.enterRule(localctx, 24, FileDescParser.RULE_gotoCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(FileDescParser.GOTO);
	        this.state = 124;
	        this.match(FileDescParser.T__0);
	        this.state = 125;
	        this.numberValue();
	        this.state = 126;
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
	    this.enterRule(localctx, 26, FileDescParser.RULE_nextCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(FileDescParser.NEXT);
	        this.state = 129;
	        this.match(FileDescParser.T__0);
	        this.state = 130;
	        this.numberValue();
	        this.state = 131;
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
	    this.enterRule(localctx, 28, FileDescParser.RULE_numberValue);
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.varExpr();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
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
	    this.enterRule(localctx, 30, FileDescParser.RULE_multiByteValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.byteValue();
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 138;
	            this.match(FileDescParser.T__2);
	            this.state = 139;
	            this.byteValue();
	            this.state = 144;
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
	    this.enterRule(localctx, 32, FileDescParser.RULE_byteValue);
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.varExpr();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 146;
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
	    this.enterRule(localctx, 34, FileDescParser.RULE_matchDataExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 939524096) !== 0))) {
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
	        this.state = 160;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.varExpr();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.match(FileDescParser.T__3);
	            this.state = 153;
	            this.varExpr();
	            this.state = 154;
	            this.match(FileDescParser.PART_SPLIT);
	            this.state = 155;
	            this.varExpr();
	            this.state = 156;
	            this.match(FileDescParser.T__4);
	            break;
	        case 6:
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 158;
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===7)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 159;
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
	    this.enterRule(localctx, 38, FileDescParser.RULE_dataFormatExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(FileDescParser.VAR);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 163;
	            this.match(FileDescParser.T__2);
	            this.state = 164;
	            this.match(FileDescParser.VAR);
	            this.state = 169;
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
	    this.enterRule(localctx, 40, FileDescParser.RULE_varExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(FileDescParser.T__7);
	        this.state = 171;
	        this.calcExpr(0);
	        this.state = 172;
	        this.match(FileDescParser.T__8);
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
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, FileDescParser.RULE_calcExpr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.state = 175;
	            this.match(FileDescParser.VAR);
	            break;
	        case 29:
	            this.state = 176;
	            this.match(FileDescParser.NUMBER);
	            break;
	        case 1:
	            this.state = 177;
	            this.match(FileDescParser.T__0);
	            this.state = 178;
	            this.calcExpr(0);
	            this.state = 179;
	            this.match(FileDescParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 191;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 189;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CalcExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FileDescParser.RULE_calcExpr);
	                    this.state = 183;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 184;
	                    _la = this._input.LA(1);
	                    if(!(_la===20 || _la===21)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 185;
	                    this.calcExpr(3);
	                    break;

	                case 2:
	                    localctx = new CalcExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, FileDescParser.RULE_calcExpr);
	                    this.state = 186;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 187;
	                    _la = this._input.LA(1);
	                    if(!(_la===22 || _la===23)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 188;
	                    this.calcExpr(2);
	                    break;

	                } 
	            }
	            this.state = 193;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
FileDescParser.BLOCK_COMMENT = 10;
FileDescParser.LINE_COMMENT = 11;
FileDescParser.IF = 12;
FileDescParser.LOOP = 13;
FileDescParser.WHILE = 14;
FileDescParser.FIND = 15;
FileDescParser.BACKFIND = 16;
FileDescParser.BACK = 17;
FileDescParser.NEXT = 18;
FileDescParser.GOTO = 19;
FileDescParser.ASTERISK = 20;
FileDescParser.SLASH = 21;
FileDescParser.PLUS = 22;
FileDescParser.MINUS = 23;
FileDescParser.PART_SPLIT = 24;
FileDescParser.GROUP_MARK = 25;
FileDescParser.NEWLINE = 26;
FileDescParser.DATA_STRING = 27;
FileDescParser.BYTE_VALUE = 28;
FileDescParser.NUMBER = 29;
FileDescParser.VAR = 30;
FileDescParser.WHITESPACE = 31;

FileDescParser.RULE_file = 0;
FileDescParser.RULE_line = 1;
FileDescParser.RULE_groupLine = 2;
FileDescParser.RULE_fieldLine = 3;
FileDescParser.RULE_commandLine = 4;
FileDescParser.RULE_groupCommandExpr = 5;
FileDescParser.RULE_whileCommand = 6;
FileDescParser.RULE_findCommand = 7;
FileDescParser.RULE_backFindCommand = 8;
FileDescParser.RULE_ifCommand = 9;
FileDescParser.RULE_loopCommand = 10;
FileDescParser.RULE_backCommand = 11;
FileDescParser.RULE_gotoCommand = 12;
FileDescParser.RULE_nextCommand = 13;
FileDescParser.RULE_numberValue = 14;
FileDescParser.RULE_multiByteValue = 15;
FileDescParser.RULE_byteValue = 16;
FileDescParser.RULE_matchDataExpr = 17;
FileDescParser.RULE_offsetExpr = 18;
FileDescParser.RULE_dataFormatExpr = 19;
FileDescParser.RULE_varExpr = 20;
FileDescParser.RULE_calcExpr = 21;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FileDescParser.RULE_file;
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

	accept(visitor) {
	    if ( visitor instanceof FileDescVisitor ) {
	        return visitor.visitFile(this);
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

	NEWLINE() {
	    return this.getToken(FileDescParser.NEWLINE, 0);
	};

	groupLine() {
	    return this.getTypedRuleContext(GroupLineContext,0);
	};

	fieldLine() {
	    return this.getTypedRuleContext(FieldLineContext,0);
	};

	commandLine() {
	    return this.getTypedRuleContext(CommandLineContext,0);
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

	PART_SPLIT() {
	    return this.getToken(FileDescParser.PART_SPLIT, 0);
	};

	matchDataExpr() {
	    return this.getTypedRuleContext(MatchDataExprContext,0);
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




FileDescParser.FileContext = FileContext; 
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
FileDescParser.ByteValueContext = ByteValueContext; 
FileDescParser.MatchDataExprContext = MatchDataExprContext; 
FileDescParser.OffsetExprContext = OffsetExprContext; 
FileDescParser.DataFormatExprContext = DataFormatExprContext; 
FileDescParser.VarExprContext = VarExprContext; 
FileDescParser.CalcExprContext = CalcExprContext; 
