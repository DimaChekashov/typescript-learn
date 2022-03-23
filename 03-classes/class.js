"use strict";
var CUser = /** @class */ (function () {
    function CUser(name) {
        this.name = name;
    }
    return CUser;
}());
var cuser = new CUser('Вася');
console.log(cuser);
cuser.name = 'Дима';
console.log(cuser);
var CAdmin = /** @class */ (function () {
    function CAdmin() {
    }
    return CAdmin;
}());
var cadmin = new CAdmin();
cadmin.role = 1;
