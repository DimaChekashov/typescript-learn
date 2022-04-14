"use strict";
var SUser = /** @class */ (function () {
    function SUser() {
    }
    return SUser;
}());
var Auth = /** @class */ (function () {
    function Auth(strategy) {
        this.strategy = strategy;
    }
    Auth.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Auth.prototype.authUser = function (user) {
        return this.strategy.auth(user);
    };
    return Auth;
}());
var JWTStrategy = /** @class */ (function () {
    function JWTStrategy() {
    }
    JWTStrategy.prototype.auth = function (user) {
        if (user.jwtToken) {
            return true;
        }
        return false;
    };
    return JWTStrategy;
}());
var GithubStrategy = /** @class */ (function () {
    function GithubStrategy() {
    }
    GithubStrategy.prototype.auth = function (user) {
        if (user.githubToken) {
            // Идем в API
            return true;
        }
        return false;
    };
    return GithubStrategy;
}());
var suser = new SUser();
suser.jwtToken = 'token';
var sauth = new Auth(new JWTStrategy());
console.log(sauth.authUser(suser));
sauth.setStrategy(new GithubStrategy());
console.log(sauth.authUser(suser));
