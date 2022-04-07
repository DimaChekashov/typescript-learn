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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VVehicle_price;
var VVehicle = /** @class */ (function () {
    function VVehicle() {
        _VVehicle_price.set(this, void 0);
    }
    Object.defineProperty(VVehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (m) {
            this._model = m;
            __classPrivateFieldSet(this, _VVehicle_price, 100, "f");
        },
        enumerable: false,
        configurable: true
    });
    VVehicle.prototype.isPriceEqual = function (v) {
        return __classPrivateFieldSet(this, _VVehicle_price, __classPrivateFieldGet(v, _VVehicle_price, "f"), "f");
    };
    VVehicle.prototype.addDamage = function (damage) {
        this.damages.push(damage);
    };
    return VVehicle;
}());
_VVehicle_price = new WeakMap();
var EuroTruck = /** @class */ (function (_super) {
    __extends(EuroTruck, _super);
    function EuroTruck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EuroTruck.prototype.setRun = function (km) {
        this.run = km / 0.62;
    };
    return EuroTruck;
}(VVehicle));
new VVehicle().make;
