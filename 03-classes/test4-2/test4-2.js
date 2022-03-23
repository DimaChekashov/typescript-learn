"use strict";
var TUser = /** @class */ (function () {
    function TUser() {
        this.skills = [];
    }
    TUser.prototype.addSkill = function (skills) {
        var _a;
        if (typeof skills === 'string') {
            this.skills.push(skills);
        }
        else if (typeof skills === 'object') {
            (_a = this.skills).push.apply(_a, skills);
        }
    };
    return TUser;
}());
var tuser = new TUser();
tuser.addSkill(['one', 'two']);
tuser.addSkill('three');
console.log(tuser.skills);
