"use strict";
function getFullName(userEntity) {
    return userEntity.firstname + " " + userEntity.surname;
}
var user = {
    firstname: 'Dima',
    surname: 'Chekashov',
    city: 'Zainsk',
    age: 23
};
console.log(getFullName(user));
