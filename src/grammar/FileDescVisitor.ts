// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';

import { DataOrder, FieldRecord, FieldValue, FileData, GroupRecord } from '../FileData';
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
import {} from '../utils';

// This class defines a complete generic visitor for a parse tree produced by FileDescParser.

type OffsetLengthPatternResult = {
    shouldMove: true;
    order: DataOrder;
    offset: number | string;
    length: number | string;
};
type OffsetEndPatternResult = {
    shouldMove: false;
    order: DataOrder;
    offset: number | string;
    end: number | string;
};
type OffsetPatternResult = OffsetLengthPatternResult | OffsetEndPatternResult;

type ScopeContext = GroupLineContext | FileDataContext;
type ChildContext = antlr4.ParserRuleContext;

interface ScopeInfo {
    level: number;
    context: ScopeContext;
    children: ChildContext[];
}

enum ParseAction {
    PARSE = 0,
    COLLECT = 1,
}

type GroupCommandFunction = () => GroupRecord;

export default class FileDescVisitor extends antlr4.tree.ParseTreeVisitor {
    private file: FileData;

    private cacheScopeContext: WeakMap<ScopeContext, ChildContext[]> = new WeakMap();
    private scopeStack: ScopeInfo[] = [];
    private get currentScope() {
        return this.scopeStack[this.scopeStack.length - 1]!;
    }

    // 用来判断当前是收集scope还是解析line
    private parseStatus: ParseAction = ParseAction.COLLECT;
    private get isCollecting() {
        return this.parseStatus === ParseAction.COLLECT;
    }

    constructor(fileData: FileData) {
        super();
        this.file = fileData;
    }

    private log(...args: any[]) {
        console.log('[FileDesc]', ...args);
    }

    // scope ----------------------------------------------------------------
    private addScope(scopeContext: ScopeContext, level: number) {
        const cacheScopeContext = this.cacheScopeContext;
        if (cacheScopeContext.has(scopeContext)) {
            console.warn('group scope exists');
            return;
        }
        cacheScopeContext.set(scopeContext, []);

        while (this.currentScope) {
            if (level <= this.currentScope.level) {
                this.scopeStack.pop();
            } else {
                break;
            }
        }

        if (this.currentScope && this.isCollecting) {
            this.pushChildContext(scopeContext);
        }

        this.scopeStack.push({
            level,
            context: scopeContext,
            get children() {
                return cacheScopeContext.get(scopeContext)!;
            },
        });
    }

    private pushChildContext(ctx: ChildContext) {
        if (!this.isCollecting) {
            return;
        }
        console.warn(ctx.getText(), this.currentScope.context);
        this.cacheScopeContext.get(this.currentScope.context)!.push(ctx);
    }

    private visitCollectContextChildren(ctx: ChildContext) {
        const children = this.cacheScopeContext.get(ctx as ScopeContext) ?? [];
        return children.map((child) => {
            this.log('exec: ', child.getText());
            this.visit(child);
        });
    }

    private drawScope(ctx?: ScopeContext, tab = '|---') {
        if (!ctx) {
            ctx = this.scopeStack[0]!.context;
        }
        const nextTab = tab + '|---';

        this.cacheScopeContext.get(ctx)?.forEach((child) => {
            this.log(tab, child.getText());
            this.drawScope(child as ScopeContext, nextTab);
        });
    }

    // ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#file.
    visitProgram(ctx: ProgramContext) {
        this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#fileData.
    visitFileData(ctx: FileDataContext) {
        this.parseStatus = ParseAction.COLLECT;
        this.addScope(ctx, 0);
        this.visitChildren(ctx);

        this.drawScope();

        if (this.scopeStack.length > 1 && !this.scopeStack[0]?.children.includes(this.scopeStack[1]?.context!)) {
            console.error('parse error!!! scope collect failed!!!');
        }

        this.scopeStack = [];
        this.log('scope------', this.scopeStack);

        this.parseStatus = ParseAction.PARSE;
        this.visitCollectContextChildren(ctx);
    }
    // line ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#line.
    visitLine(ctx: LineContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#groupLine.
    visitGroupLine(ctx: GroupLineContext) {
        const protoChildren = ctx.children;
        const children =
            protoChildren[0] instanceof GroupCommandExprContext ? [...protoChildren] : [undefined, ...protoChildren];
        const [command, markData, nameData] = children;

        const level = markData.getText().length;

        if (this.isCollecting) {
            this.addScope(ctx, level);
            return;
        }

        const parseGroupData: GroupCommandFunction = () => {
            const groupData: GroupRecord = {
                type: 'group',
                level,
                name: nameData.getText() ?? '',
                content: [],
            };
            // 得先push再操作command。command依赖group栈处理
            this.file.push(groupData);
            this.log('group---', ctx.getText(), groupData);

            this.visitCollectContextChildren(ctx);
            return groupData;
        };

        if (command) {
            this.visitGroupCommandExpr(command, parseGroupData);
        } else {
            parseGroupData();
        }
    }

    // Visit a parse tree produced by FileDescParser#fieldLine.
    visitFieldLine(ctx: FieldLineContext) {
        if (this.isCollecting) {
            this.pushChildContext(ctx);
            return;
        }

        const fieldNodeData = this.visitChildren(ctx);

        const [name, s1, offsetPatternData, s2, formatter = []] = fieldNodeData;

        const offsetPattern: OffsetPatternResult = offsetPatternData;
        const { shouldMove, order, offset } = offsetPattern;

        const fieldData: FieldRecord = {
            type: 'field',
            name,
            offset,
            order,
            shouldMove,
            data: null,
            value: undefined,
            length,
            formatter,
        };

        if ('length' in offsetPattern) {
            fieldData.length = offsetPattern.length;
            fieldData.offset = this.file.pointer;

            fieldData.data = this.file.getData(
                fieldData.offset,
                fieldData.offset + Number(fieldData.length),
                fieldData.order,
            );
            this.file.move(Number(fieldData.length));
        } else {
            fieldData.offset = offset;
            fieldData.end = offsetPattern.end;

            fieldData.data = this.file.getData(Number(fieldData.offset), Number(fieldData.end), fieldData.order);
        }

        const value = this.file.pipeDataFormatter(fieldData.data, formatter);
        fieldData.value = value;

        this.file.push(fieldData);

        this.log('field---', ctx.getText(), fieldData);
    }

    // Visit a parse tree produced by FileDescParser#commandLine.
    visitCommandLine(ctx: CommandLineContext) {
        if (this.isCollecting) {
            this.pushChildContext(ctx);
            return;
        }

        return this.visitChildren(ctx);
    }

    // command ----------------------------------------------------------------

    // Visit a parse tree produced by FileDescParser#groupCommandExpr.
    visitGroupCommandExpr(ctx: GroupCommandExprContext, execGroup: GroupCommandFunction) {
        const commandContext = ctx.children?.[0];
        switch (true) {
            case commandContext instanceof WhileCommandContext:
                this.visitWhileCommand(commandContext, execGroup);
                break;
            case commandContext instanceof IfCommandContext:
                this.visitIfCommand(commandContext, execGroup);
                break;
            case commandContext instanceof LoopCommandContext:
                this.visitLoopCommand(commandContext, execGroup);
                break;
        }
    }

    // Visit a parse tree produced by FileDescParser#whileCommand.
    visitWhileCommand(ctx: WhileCommandContext, execGroup: GroupCommandFunction) {
        const condition = () => {
            const [whileMark, lb, expectValue, rb] = this.visitChildren(ctx);
            return false;
        };

        while (condition()) {
            const group = execGroup();
            group.loop = true;
            group.optional = true;
        }
    }

    // Visit a parse tree produced by FileDescParser#ifCommand.
    visitIfCommand(ctx: IfCommandContext, execGroup: GroupCommandFunction) {
        const condition = () => {
            const [ifMark, lb, varValue, isMark, expectValue, rb] = this.visitChildren(ctx);
            const data = this.file.getVar(varValue);
            // debugger
            [ifMark, lb, varValue, isMark, expectValue, rb]
            return false;
        };

        if (condition()) {
            const group = execGroup();
            group.optional = true;
        }
    }

    // Visit a parse tree produced by FileDescParser#loopCommand.
    visitLoopCommand(ctx: LoopCommandContext, execGroup: GroupCommandFunction) {
        const [loopMark, lb, loopValue, rb] = this.visitChildren(ctx);
        let loopCount = +loopValue || 0;

        while (loopCount-- > 0) {
            const group = execGroup();
            group.loop = true;
        }
    }

    // ----------------

    // Visit a parse tree produced by FileDescParser#findCommand.
    visitFindCommand(ctx: FindCommandContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#backFindCommand.
    visitBackFindCommand(ctx: BackFindCommandContext) {
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
        let offset = this.file.pointer;
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
            return { shouldMove, order, offset, end };
        }
        length = data[0] || 0;
        return { shouldMove, order, offset, length };
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
        return this.visitChildren(ctx).join(' ');
    }

    // Visit a parse tree produced by FileDescParser#calcExpr.
    visitCalcExpr(ctx: CalcExprContext): FieldValue {
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
