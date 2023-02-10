// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import type { FileData } from '../FileData';

// This class defines a complete generic visitor for a parse tree produced by FileDescParser.

export default class FileDescVisitor extends antlr4.tree.ParseTreeVisitor {
    private data: FileData;

    constructor(fileData: FileData) {
        super();
        this.data = fileData;
    }

    // Visit a parse tree produced by FileDescParser#file.
    visitFile(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#line.
    visitLine(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#groupLine.
    visitGroupLine(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#fieldLine.
    visitFieldLine(ctx) {
        return this.visitChildren(ctx);
    }

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
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#loopCommand.
    visitLoopCommand(ctx) {
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

    // Visit a parse tree produced by FileDescParser#numberValue.
    visitNumberValue(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#multiByteValue.
    visitMultiByteValue(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#byteValue.
    visitByteValue(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#matchDataExpr.
    visitMatchDataExpr(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#offsetExpr.
    visitOffsetExpr(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#dataFormatExpr.
    visitDataFormatExpr(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#varExpr.
    visitVarExpr(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by FileDescParser#calcExpr.
    visitCalcExpr(ctx) {
        return this.visitChildren(ctx);
    }
}
