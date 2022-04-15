"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.run = function () {
        console.log("Done!");
    };
    return App;
}());
exports.App = App;
var app = new App();
app.run();
