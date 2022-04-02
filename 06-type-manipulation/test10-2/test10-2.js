"use strict";
var form = {
    name: "Vasya",
    password: "123"
};
var formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: "Должен быть длиннее 5 символов" }
};
