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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @nullUser3
var UserService3 = /** @class */ (function () {
    // @threeUserAdvanced3
    // @setUserAdvanced3(4)
    function UserService3() {
    }
    UserService3.prototype.getUsersInDatabase = function () {
        return this.users;
    };
    UserService3 = __decorate([
        setUsers(2),
        log()
        // @threeUserAdvanced3
        // @setUserAdvanced3(4)
    ], UserService3);
    return UserService3;
}());
function nullUser3(target) {
    target.prototype.users = 0;
}
function setUsers(users) {
    console.log('setUsers init');
    return function (target) {
        console.log('setUsers run');
        target.prototype.users = users;
    };
}
function log() {
    console.log('log init');
    return function (target) {
        console.log('log run');
        console.log(target);
    };
}
function setUserAdvanced3(users) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.users = users;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
function threeUserAdvanced3(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.users = 3;
            return _this;
        }
        return class_2;
    }(constructor));
}
console.log(new UserService3().getUsersInDatabase());
