"use strict";
var COUser = /** @class */ (function () {
    function COUser(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        else if (typeof age === 'number') {
            this.age = age;
        }
    }
    return COUser;
}());
var couser = new COUser('Вася');
var couser2 = new COUser();
var couser3 = new COUser(23);
var couser4 = new COUser('Вася', 23);
