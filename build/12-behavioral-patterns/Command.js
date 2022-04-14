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
var ComUser = /** @class */ (function () {
    function ComUser(userId) {
        this.userId = userId;
    }
    return ComUser;
}());
var ComCommandHistory = /** @class */ (function () {
    function ComCommandHistory() {
        this.commands = [];
    }
    ComCommandHistory.prototype.push = function (command) {
        this.commands.push(command);
    };
    ComCommandHistory.prototype.remove = function (command) {
        this.commands = this.commands.filter(function (c) { return c.commandId !== command.commandId; });
    };
    return ComCommandHistory;
}());
var ComCommand = /** @class */ (function () {
    function ComCommand(history) {
        this.history = history;
        this.commandId = Math.random();
    }
    return ComCommand;
}());
var AddUserCommand = /** @class */ (function (_super) {
    __extends(AddUserCommand, _super);
    function AddUserCommand(user, receiver, history) {
        var _this = _super.call(this, history) || this;
        _this.user = user;
        _this.receiver = receiver;
        return _this;
    }
    AddUserCommand.prototype.execute = function () {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    };
    AddUserCommand.prototype.undo = function () {
        this.receiver.deleteUser(this.user.userId);
        this.history.remove(this);
    };
    return AddUserCommand;
}(ComCommand));
var ComUserService = /** @class */ (function () {
    function ComUserService() {
    }
    ComUserService.prototype.saveUser = function (user) {
        console.log("\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 id " + user.userId);
    };
    ComUserService.prototype.deleteUser = function (userId) {
        console.log("\u0423\u0434\u0430\u043B\u044F\u0435\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 id " + userId);
    };
    return ComUserService;
}());
var ComController = /** @class */ (function () {
    function ComController() {
        this.history = new ComCommandHistory();
    }
    ComController.prototype.addReceiver = function (receiver) {
        this.receiver = receiver;
    };
    ComController.prototype.run = function () {
        var addUserCommand = new AddUserCommand(new ComUser(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    };
    return ComController;
}());
var comController = new ComController();
comController.addReceiver(new ComUserService());
comController.run();
