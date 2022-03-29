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
var EPayment = /** @class */ (function () {
    function EPayment(id) {
        this.status = 'new';
        this.id = id;
    }
    EPayment.prototype.pay = function () {
        this.status = 'paid';
    };
    return EPayment;
}());
var ParsistendEPayment = /** @class */ (function (_super) {
    __extends(ParsistendEPayment, _super);
    function ParsistendEPayment() {
        var _this = this;
        var id = Math.random();
        _this = _super.call(this, id) || this;
        return _this;
    }
    ParsistendEPayment.prototype.save = function () {
    };
    ParsistendEPayment.prototype.pay = function (date) {
        _super.prototype.pay.call(this);
        if (date) {
            this.paidAt = date;
        }
    };
    return ParsistendEPayment;
}(EPayment));
new ParsistendEPayment();
var EUser = /** @class */ (function () {
    function EUser() {
        this.name = 'user';
        console.log(this.name);
    }
    return EUser;
}());
var EAdmin = /** @class */ (function (_super) {
    __extends(EAdmin, _super);
    function EAdmin() {
        var _this = _super.call(this) || this;
        _this.name = 'admin';
        console.log(_this.name);
        return _this;
    }
    return EAdmin;
}(EUser));
new EAdmin();
