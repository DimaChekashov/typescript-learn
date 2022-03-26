"use strict";
var TUser = /** @class */ (function () {
    function TUser() {
        this.skills = [];
    }
    TUser.prototype.addSkill = function (skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    };
    return TUser;
}());
function run(distance) {
    if (typeof distance === 'number') {
        return 1;
    }
    else {
        return '';
    }
}
