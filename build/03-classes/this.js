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
var TPayment = /** @class */ (function () {
    function TPayment() {
        var _this = this;
        this.date = new Date();
        this.getDateArrow = function () {
            return _this.date;
        };
    }
    TPayment.prototype.getDate = function () {
        return this.date;
    };
    return TPayment;
}());
var tp = new TPayment();
var tuser = {
    id: 1,
    paymentDate: tp.getDate.bind(tp),
    paymentDateArrow: tp.getDateArrow
};
console.log(tp.getDate());
console.log(tuser.paymentDate());
console.log(tuser.paymentDateArrow());
var TPaymentPersistent = /** @class */ (function (_super) {
    __extends(TPaymentPersistent, _super);
    function TPaymentPersistent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TPaymentPersistent.prototype.save = function () {
        return this.getDateArrow();
    };
    return TPaymentPersistent;
}(TPayment));
console.log(new TPaymentPersistent().save());
