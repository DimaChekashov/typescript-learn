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
var MList = /** @class */ (function () {
    function MList(items) {
        this.items = items;
    }
    return MList;
}());
var MAccordion = /** @class */ (function () {
    function MAccordion() {
    }
    return MAccordion;
}());
var MExtendedListClass = /** @class */ (function (_super) {
    __extends(MExtendedListClass, _super);
    function MExtendedListClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MExtendedListClass.prototype.first = function () {
        return this.items[0];
    };
    return MExtendedListClass;
}(MList));
function MExtendedList(Base) {
    return /** @class */ (function (_super) {
        __extends(MExtendedList, _super);
        function MExtendedList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MExtendedList.prototype.first = function () {
            return this.items[0];
        };
        return MExtendedList;
    }(Base));
}
var MAccordionList = /** @class */ (function () {
    function MAccordionList(items) {
        this.items = items;
    }
    return MAccordionList;
}());
var mlist = MExtendedList(MAccordionList);
var mres = new mlist(['first', 'second']);
console.log(mres.first());
