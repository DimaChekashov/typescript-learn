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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');
var UserService9 = /** @class */ (function () {
    function UserService9() {
    }
    UserService9.prototype.getUsersInDatabase = function () {
        return this._users;
    };
    UserService9.prototype.setUsersInDatabase = function (num) {
        this._users = num;
    };
    __decorate([
        Validate9(),
        __param(0, Positive9()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], UserService9.prototype, "setUsersInDatabase", null);
    return UserService9;
}());
function Positive9() {
    return function (target, propertyKey, parameterIndex) {
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
        var existParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    };
}
function Validate9() {
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var positiveParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
            if (positiveParams) {
                for (var _a = 0, positiveParams_1 = positiveParams; _a < positiveParams_1.length; _a++) {
                    var index = positiveParams_1[_a];
                    if (args[index] < 0) {
                        throw new Error('Число должно быть больше нуля');
                    }
                }
            }
            return method === null || method === void 0 ? void 0 : method.apply(this, args);
        };
    };
}
var userService9 = new UserService9();
console.log(userService9.setUsersInDatabase(10));
console.log(userService9.setUsersInDatabase(-1));
