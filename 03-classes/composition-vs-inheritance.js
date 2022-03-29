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
var CoUser = /** @class */ (function () {
    function CoUser(name) {
        this.name = name;
    }
    return CoUser;
}());
var CoUsers = /** @class */ (function (_super) {
    __extends(CoUsers, _super);
    function CoUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoUsers.prototype.searchByName = function (name) {
        return this.filter(function (u) { return u.name === name; });
    };
    CoUsers.prototype.toString = function () {
        return this.map(function (u) { return u.name; }).join(', ');
    };
    return CoUsers;
}(Array));
var coUsers = new CoUsers();
coUsers.push(new CoUser('Vasya'));
coUsers.push(new CoUser('Dima'));
console.log(coUsers.toString());
