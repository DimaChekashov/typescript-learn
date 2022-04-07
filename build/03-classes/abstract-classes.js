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
var AController = /** @class */ (function () {
    function AController() {
    }
    AController.prototype.handleWithLogs = function (req) {
        console.log("Start");
        this.handle(req);
        console.log("End");
    };
    return AController;
}());
var AUserController = /** @class */ (function (_super) {
    __extends(AUserController, _super);
    function AUserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AUserController.prototype.handle = function (req) {
        console.log(req);
    };
    return AUserController;
}(AController));
// new AController() - error
var ac = new AUserController();
ac.handleWithLogs("Request");
