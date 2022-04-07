"use strict";
var UserHistory = /** @class */ (function () {
    function UserHistory(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    UserHistory.prototype.clone = function () {
        var target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    };
    return UserHistory;
}());
var puser = new UserHistory('a@a.ru', 'Anton');
console.log(puser);
var puser2 = puser.clone();
puser2.email = 'b@b.ru';
console.log(puser2);
