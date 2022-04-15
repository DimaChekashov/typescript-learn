"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FfmpegBuilder = void 0;
var FfmpegBuilder = /** @class */ (function () {
    function FfmpegBuilder() {
        this.options = new Map();
        this.options.set('-c:v', 'libx264');
    }
    FfmpegBuilder.prototype.input = function (inputPath) {
        this.inputPath = inputPath;
        return this;
    };
    FfmpegBuilder.prototype.setVideoSize = function (width, height) {
        this.options.set('-s', width + "x" + height);
        return this;
    };
    FfmpegBuilder.prototype.output = function (outputPath) {
        if (!this.inputPath) {
            throw new Error('Не задан параметр input');
        }
        var args = ['-i', this.inputPath];
        this.options.forEach(function (value, key) {
            args.push(key);
            args.push(value);
        });
        args.push(outputPath);
        return args;
    };
    return FfmpegBuilder;
}());
exports.FfmpegBuilder = FfmpegBuilder;
