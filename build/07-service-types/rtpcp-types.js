"use strict";
var RUser = /** @class */ (function () {
    function RUser(id, name) {
        this.id = id;
        this.name = name;
    }
    return RUser;
}());
function rGetData(id) {
    return new RUser(id, 'Vasya');
}
