export var A;
(function (A) {
    A.a = 5;
})(A || (A = {}));
export default function run() {
    console.log('run');
}
export var Obj = {};
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
export { Test };
