"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var d = 5;
var x = d.toString();
var s = new String(d).valueOf();
var f = new Boolean(d).valueOf();
var z = 'asdasd';
var v = parseInt(z);
var box = {
    name: 'Vasya',
    email: 'a@a.a',
    login: 'vasya'
};
var admin = __assign(__assign({}, box), { role: 1 });
function userToAdmin(box) {
    return {
        name: box.name,
        role: 1
    };
}
