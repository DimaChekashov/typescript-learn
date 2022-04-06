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
var UserService7 = /** @class */ (function () {
    function UserService7() {
    }
    Object.defineProperty(UserService7.prototype, "users", {
        get: function () {
            return this._users;
        },
        set: function (num) {
            this._users = num;
        },
        enumerable: false,
        configurable: true
    });
    UserService7.prototype.getUsersInDatabase = function () {
        throw new Error('Ошибка');
    };
    __decorate([
        Log7(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], UserService7.prototype, "users", null);
    return UserService7;
}());
function Log7() {
    return function (target, _, descriptor) {
        var set = descriptor.set;
        descriptor.set = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log(args);
            set === null || set === void 0 ? void 0 : set.apply(target, args);
        };
    };
}
var userService7 = new UserService7();
userService7.users = 1;
console.log(userService7.users);
