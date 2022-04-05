"use strict";
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = 1000;
    }
    UserService.prototype.getUsersInDatabase = function () {
        return this.users;
    };
    return UserService;
}());
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('Users: ' + obj.users);
    return obj;
}
console.log(new UserService().getUsersInDatabase());
console.log(nullUser(new UserService()).getUsersInDatabase());
console.log(logUsers(nullUser(new UserService())).getUsersInDatabase());
console.log(nullUser(logUsers(new UserService())).getUsersInDatabase());
