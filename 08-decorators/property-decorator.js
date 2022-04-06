"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserService6 = /** @class */ (function () {
    function UserService6() {
    }
    UserService6.prototype.getUsersInDatabase = function () {
        throw new Error('Ошибка');
    };
    __decorate([
        Max6(100)
    ], UserService6.prototype, "users", void 0);
    return UserService6;
}());
function Max6(max) {
    return function (target, propertyKey) {
        var value;
        var setter = function name(newValue) {
            if (newValue > max) {
                console.log("\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 " + max);
            }
            else {
                value = newValue;
            }
        };
        var getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
var userService6 = new UserService6();
userService6.users = 1;
console.log(userService6.users);
userService6.users = 1000;
console.log(userService6.users);
