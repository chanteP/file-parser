// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';

import { DataOrder, FieldRecord, FileData, GroupRecord } from '../FileData';
import { SyntaxException } from '../exception';
import {
    ProgramContext,
    FileDataContext,
    LineContext,
    GroupLineContext,
    FieldLineContext,
    CommandLineContext,
    GroupCommandExprContext,
    WhileCommandContext,
    FindCommandContext,
    BackFindCommandContext,
    IfCommandContext,
    LoopCommandContext,
    BackCommandContext,
    GotoCommandContext,
    NextCommandContext,
    MultiByteValueContext,
    MultiMatchDataValueContext,
    MatchDataExprContext,
    OffsetExprContext,
    DataFormatExprContext,
    NumberValueContext,
    ByteValueContext,
    VarExprContext,
    TextValueContext,
    StringValueContext,
    CalcExprContext,
} from './FileDescParser';

// This class defines a complete generic visitor for a parse tree produced by FileDescParser.

type OffsetPatternResult =
    | {
          shouldMove: true;
          order: DataOrder;
          offset: () => number;
          length: () => number;
          end?: () => number;
      }
    | {
          shouldMove: false;
          order: DataOrder;
          offset: () => number;
          length: () => number;
          end: () => number;
      };

export default class FileDescVisitor extends antlr4.tree.ParseTreeVisitor {
    private file: FileData;

    constructor(fileData: FileData) {
        super();
        this.file = fileData;
    }

    // Visit a parse tree produced by FileDescParser#file.
    visitProgram(ctx: ProgramContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#fileData.
    visitFileData(ctx: FileDataContext) {
        return this.visitChildren(ctx);
    }
    // line ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#line.
    visitLine(ctx: LineContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#groupLine.
    visitGroupLine(ctx: GroupLineContext) {
        const children =
            ctx.children[0] instanceof GroupCommandExprContext ? ctx.children : [undefined, ...ctx.children];
        const [command, markData, nameData] = children;

        const groupData: GroupRecord = {
            type: 'group',
            level: markData.getText().length,
            name: () => nameData ?? '',
            content: [],
        };
        // 得先push再操作command。command依赖group栈处理
        this.file.push(groupData);
        console.log('group---', ctx.getText(), groupData);

        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#fieldLine.
    visitFieldLine(ctx: FieldLineContext) {
        const fieldNodeData = this.visitChildren(ctx);

        const [name, s1, offsetPattern, s2, formatter = []] = fieldNodeData;

        const { shouldMove, order, offset, length, end } = offsetPattern as OffsetPatternResult;

        const data = () => this.file.getData(offset(), end === undefined ? offset() + length() : end());

        const fieldData: FieldRecord = {
            type: 'field',
            name,
            offset,
            order,
            shouldMove,
            data,
            length,
            formatter,
        };

        this.file.push(fieldData);

        console.log('field---', ctx.getText(), fieldData);
    }

    // command ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#commandLine.
    visitCommandLine(ctx: CommandLineContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#groupCommandExpr.
    visitGroupCommandExpr(ctx: GroupCommandExprContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#whileCommand.
    visitWhileCommand(ctx: WhileCommandContext) {
        this.file.currentScope!.loop = () => {
            return true;
        };
        this.file.currentScope!.optional = () => true;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#findCommand.
    visitFindCommand(ctx: FindCommandContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#backFindCommand.
    visitBackFindCommand(ctx: BackFindCommandContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#ifCommand.
    visitIfCommand(ctx: IfCommandContext) {
        this.file.currentScope!.optional = () => true;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#loopCommand.
    visitLoopCommand(ctx: LoopCommandContext) {
        this.file.currentScope!.loop = () => true;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#backCommand.
    visitBackCommand(ctx: BackCommandContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#gotoCommand.
    visitGotoCommand(ctx: GotoCommandContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#nextCommand.
    visitNextCommand(ctx: NextCommandContext) {
        return this.visitChildren(ctx);
    }

    // value expression ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#multiByteValue.
    visitMultiByteValue(ctx: MultiByteValueContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#multiMatchDataValue.
    visitMultiMatchDataValue(ctx: MultiMatchDataValueContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#matchDataExpr.
    visitMatchDataExpr(ctx: MatchDataExprContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#offsetExpr.
    visitOffsetExpr(ctx: OffsetExprContext): OffsetPatternResult {
        // const { shouldMove, order, offset, length, end };
        const data = this.visitChildren(ctx);
        let order = DataOrder.LE;
        let shouldMove = true;
        let offset = () => this.file.pointer;
        let end = () => 0;
        let length = () => 0;

        if (data[0] === '>') {
            order = DataOrder.BE;
            data.shift();
        } else if (data[0] === '<') {
            order = DataOrder.LE;
            data.shift();
        }

        if (data[0] === '[') {
            shouldMove = false;
            offset = data[1];
            end = data[3];
            length = () => end() - offset() || 0;
        } else {
            length = () => +data[0] || 0;
        }
        return { shouldMove, order, offset, length, end };
    }

    // Visit a parse tree produced by FileDescParser#dataFormatExpr.
    visitDataFormatExpr(ctx: DataFormatExprContext) {
        return this.visitChildren(ctx);
    }

    // basic value ----------------------------------------------------------------

    override visitTerminal(ctx) {
        return ctx.getText();
    }

    // Visit a parse tree produced by FileDescParser#numberValue.
    visitNumberValue(ctx: NumberValueContext) {
        const template = ctx.children[0].getText();
        if (!isNaN(template)) {
            return +template;
        }
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#byteValue.
    visitByteValue(ctx: ByteValueContext) {
        if (ctx.children[0].getText === '[') {
            const valueList = this.visitChildren(ctx).slice(1, -1);
            // TODO
            return valueList;
        }
        return this.visitChildren(ctx)[0];
    }

    // Visit a parse tree produced by FileDescParser#varExpr.
    visitVarExpr(ctx: VarExprContext) {
        return this.visitChildren(ctx)[1];
    }

    // Visit a parse tree produced by FileDescParser#textValue.
    visitTextValue(ctx: TextValueContext) {
        return this.visitChildren(ctx).join(' ');
    }

    // Visit a parse tree produced by FileDescParser#stringValue.
    visitStringValue(ctx: StringValueContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#calcExpr.
    visitCalcExpr(ctx: CalcExprContext) {
        if (ctx.children.length === 1) {
            const data = ctx.children[0].getText();
            if (isNaN(data)) {
                return this.file.getVar(data);
            }
            return data;
        }
        const rs = this.visitChildren(ctx);
        if (rs[0] === '(') {
            return rs[1];
        }
        const [l, o, r] = rs;
        switch (o) {
            case '*':
                return +l * +r;
            case '/':
                return +l / +r;
            case '+':
                return +l + +r;
            case '-':
                return +l - +r;
        }
        throw new SyntaxException(`unknown operation ${o}`);
    }
}
