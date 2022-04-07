"use strict";
var key = 'age';
function getValue(obj, key) {
    return obj[key];
}
var kuser = {
    name: "Vasya",
    age: 30
};
var kuserName = getValue(kuser, 'name');
