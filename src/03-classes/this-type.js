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
var TUserBuilder = /** @class */ (function () {
    function TUserBuilder() {
    }
    TUserBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    TUserBuilder.prototype.isAdmin = function () {
        return this instanceof TAdminBuilder;
    };
    return TUserBuilder;
}());
var TAdminBuilder = /** @class */ (function (_super) {
    __extends(TAdminBuilder, _super);
    function TAdminBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TAdminBuilder;
}(TUserBuilder));
var tres = new TUserBuilder().setName('Vasya');
var tres2 = new TAdminBuilder().setName('Vasya');
var ttuser = new TUserBuilder();
if (ttuser.isAdmin()) {
    console.log(ttuser);
}
else {
    console.log(ttuser);
}
