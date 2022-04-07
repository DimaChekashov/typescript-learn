"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ca = Math.random() > 0.5 ? 1 : 0;
var csuc = {
    code: 200,
    data: 'done'
};
var cerr = {
    code: 200,
    data: new Error()
};
var ConUser = /** @class */ (function () {
    function ConUser() {
    }
    return ConUser;
}());
var ConUserPersistend = /** @class */ (function (_super) {
    __extends(ConUserPersistend, _super);
    function ConUserPersistend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConUserPersistend;
}(ConUser));
function getConUser(dbIdOrId) {
    if (typeof dbIdOrId === 'number') {
        return new ConUser();
    }
    else {
        return new ConUserPersistend();
    }
}
function getUser2(id) {
    if (typeof id === 'number') {
        return new ConUser();
    }
    else {
        return new ConUserPersistend();
    }
}
var cores = getUser2(1);
var cores2 = getUser2('qwerty');
