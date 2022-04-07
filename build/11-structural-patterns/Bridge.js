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
var TelegramProvider = /** @class */ (function () {
    function TelegramProvider() {
    }
    TelegramProvider.prototype.sendMessage = function (message) {
        console.log(message);
    };
    TelegramProvider.prototype.connect = function (config) {
        console.log(config);
    };
    TelegramProvider.prototype.disconnect = function () {
        console.log("Disconnected TG");
    };
    return TelegramProvider;
}());
var WhatsUpProvider = /** @class */ (function () {
    function WhatsUpProvider() {
    }
    WhatsUpProvider.prototype.sendMessage = function (message) {
        console.log(message);
    };
    WhatsUpProvider.prototype.connect = function (config) {
        console.log(config);
    };
    WhatsUpProvider.prototype.disconnect = function () {
        console.log("Disconnected WU");
    };
    return WhatsUpProvider;
}());
var NotificationSender = /** @class */ (function () {
    function NotificationSender(provider) {
        this.provider = provider;
    }
    NotificationSender.prototype.send = function () {
        this.provider.connect('');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    };
    return NotificationSender;
}());
var DelayNotificationSender = /** @class */ (function (_super) {
    __extends(DelayNotificationSender, _super);
    function DelayNotificationSender(provider) {
        return _super.call(this, provider) || this;
    }
    DelayNotificationSender.prototype.sendDelayed = function () {
    };
    return DelayNotificationSender;
}(NotificationSender));
var sender = new NotificationSender(new TelegramProvider());
sender.send();
var sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();
