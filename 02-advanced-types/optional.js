"use strict";
var block = {
    login: 'a@a.ru',
    password: '1'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function testPass(block) {
    var _a;
    var t = (_a = block.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    var t = param !== null && param !== void 0 ? param : multiply(5);
}
