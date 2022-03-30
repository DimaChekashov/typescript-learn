"use strict";
var SUserService = /** @class */ (function () {
    function SUserService(id) {
    }
    SUserService.getUser = function (id) {
        return SUserService.db.findById(id);
    };
    SUserService.prototype.create = function () {
        SUserService.db;
    };
    return SUserService;
}());
(function () {
    SUserService.db = 'sdf';
})();
SUserService.getUser(1);
var inst = new SUserService(1);
inst.create();
