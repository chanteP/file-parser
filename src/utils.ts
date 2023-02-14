export function packValueOfFunction(fn: () => any) {
    fn.valueOf = fn();
    return fn;
}

export function getValueFromExpr(expr: unknown) {
    if (typeof expr === 'function') {
        return expr();
    }
    return expr;
}
