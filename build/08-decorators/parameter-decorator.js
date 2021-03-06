"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserService8 = /** @class */ (function () {
    function UserService8() {
    }
    UserService8.prototype.getUsersInDatabase = function () {
        return this._users;
    };
    UserService8.prototype.setUsersInDatabase = function (num, _) {
        this._users = num;
    };
    __decorate([
        __param(0, Positive8()),
        __param(1, Positive8()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], UserService8.prototype, "setUsersInDatabase", null);
    return UserService8;
}());
function Positive8() {
    return function (target, propertyKey, parameterIndex) {
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    };
}
var userService8 = new UserService8();
