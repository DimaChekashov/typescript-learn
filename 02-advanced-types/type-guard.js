"use strict";
var tbox = {
    name: 'Vasya',
    email: 'a@a.a',
    login: 'vasya'
};
function logTId(id) {
    if (isTString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isTString(x) {
    return typeof x === 'string';
}
function isAdmin(tbox) {
    return 'role' in tbox;
}
function isAdminAlternative(tbox) {
    return tbox.role !== undefined;
}
function setRole(tbox) {
    if (isAdmin(tbox)) {
        tbox.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
