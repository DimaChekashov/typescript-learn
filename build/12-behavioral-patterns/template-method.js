"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Form = /** @class */ (function () {
    function Form(name) {
        this.name = name;
    }
    return Form;
}());
var SaveForm = /** @class */ (function () {
    function SaveForm() {
    }
    SaveForm.prototype.save = function (form) {
        var res = this.fill(form);
        this.log(res);
        this.send(res);
    };
    SaveForm.prototype.log = function (data) {
        console.log(data);
    };
    return SaveForm;
}());
var FirstAPI = /** @class */ (function (_super) {
    __extends(FirstAPI, _super);
    function FirstAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstAPI.prototype.fill = function (form) {
        return form.name;
    };
    FirstAPI.prototype.send = function (data) {
        console.log("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E " + data);
    };
    return FirstAPI;
}(SaveForm));
var SecondAPI = /** @class */ (function (_super) {
    __extends(SecondAPI, _super);
    function SecondAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecondAPI.prototype.fill = function (form) {
        return { fio: form.name };
    };
    SecondAPI.prototype.send = function (data) {
        console.log("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E " + data);
    };
    return SecondAPI;
}(SaveForm));
var form1 = new FirstAPI();
form1.save(new Form('Vasya'));
var form2 = new SecondAPI();
form2.save(new Form('Vasya'));
