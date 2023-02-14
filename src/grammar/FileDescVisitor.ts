// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';

import { DataOrder, FieldRecord, FileData, GroupRecord } from '../FileData';
import { SyntaxException } from '../exception';
import FileDescParser from './FileDescParser';

// This class defines a complete generic visitor for a parse tree produced by FileDescParser.
const { GroupCommandExprContext } = FileDescParser;

export default class FileDescVisitor extends antlr4.tree.ParseTreeVisitor {
    private data: FileData;

    constructor(fileData: FileData) {
        super();
        this.data = fileData;
    }

    // Visit a parse tree produced by FileDescParser#file.
    visitProgram(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#fileData.
    visitFileData(ctx) {
        return this.visitChildren(ctx);
    }
    // line ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#line.
    visitLine(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#groupLine.
    visitGroupLine(ctx) {
        const children =
            ctx.children[0] instanceof GroupCommandExprContext ? ctx.children : [undefined, ...ctx.children];
        const [command, markData, nameData] = children;

        const groupData: GroupRecord = {
            type: 'group',
            level: markData.getText().length,
            name: nameData.getText() ?? '',
            content: [],
        };
        // 得先push再操作command。command依赖group栈处理
        this.data.push(groupData);
        console.log('group---', ctx.getText(), groupData);

        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#fieldLine.
    visitFieldLine(ctx) {
        const fieldNodeData = this.visitChildren(ctx);

        const [name, s1, offsetPattern, s2, formatter = []] = fieldNodeData;

        const { shouldMove, order, offset, length, end } = offsetPattern;

        const data = this.data.getData(offset, end ?? offset + length);

        const fieldData: FieldRecord = {
            type: 'field',
            name: name,
            offset,
            order,
            data,
            length,
            end,
            formatter,
            value: this.data.pipeDataFormatter(data, formatter),
        };

        shouldMove && this.data.move(length);

        this.data.push(fieldData);

        console.log('field---', ctx.getText(), fieldData);
    }

    // command ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#commandLine.
    visitCommandLine(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#groupCommandExpr.
    visitGroupCommandExpr(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#whileCommand.
    visitWhileCommand(ctx) {
        this.data.currentScope!.loop = true;
        this.data.currentScope!.optional = true;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#findCommand.
    visitFindCommand(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#backFindCommand.
    visitBackFindCommand(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#ifCommand.
    visitIfCommand(ctx) {
        this.data.currentScope!.optional = true;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#loopCommand.
    visitLoopCommand(ctx) {
        this.data.currentScope!.loop = true;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#backCommand.
    visitBackCommand(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#gotoCommand.
    visitGotoCommand(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#nextCommand.
    visitNextCommand(ctx) {
        return this.visitChildren(ctx);
    }

    // value expression ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#multiByteValue.
    visitMultiByteValue(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#multiMatchDataValue.
    visitMultiMatchDataValue(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#matchDataExpr.
    visitMatchDataExpr(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#offsetExpr.
    visitOffsetExpr(ctx) {
        // const { shouldMove, order, offset, length, end };
        const data = this.visitChildren(ctx);
        let order = DataOrder.LE;
        let shouldMove = true;
        let offset = this.data.pointer;
        let end = 0;
        let length = 0;

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
            length = end - offset || 0;
        } else {
            length = +data[0] || 0;
        }
        return { shouldMove, order, offset, length, end };
    }

    // Visit a parse tree produced by FileDescParser#dataFormatExpr.
    visitDataFormatExpr(ctx) {
        return this.visitChildren(ctx);
    }

    // basic value ----------------------------------------------------------------

    visitTerminal(ctx) {
        return ctx.getText();
    }

    // Visit a parse tree produced by FileDescParser#numberValue.
    visitNumberValue(ctx) {
        const template = ctx.children[0].getText();
        if (!isNaN(template)) {
            return +template;
        }
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#byteValue.
    visitByteValue(ctx) {
        if (ctx.children[0].getText === '[') {
            const valueList = this.visitChildren(ctx).slice(1, -1);
            // TODO
            return valueList;
        }
        return this.visitChildren(ctx)[0];
    }

    // Visit a parse tree produced by FileDescParser#varExpr.
    visitVarExpr(ctx) {
        return this.visitChildren(ctx)[1];
    }

    // Visit a parse tree produced by FileDescParser#textValue.
    visitTextValue(ctx) {
        return this.visitChildren(ctx).join(' ');
    }

    // Visit a parse tree produced by FileDescParser#stringValue.
    visitStringValue(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#calcExpr.
    visitCalcExpr(ctx) {
        if (ctx.children.length === 1) {
            const data = ctx.children[0].getText();
            if (isNaN(data)) {
                return this.data.getVar(data);
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
