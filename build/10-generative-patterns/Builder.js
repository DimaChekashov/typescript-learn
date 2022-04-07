"use strict";
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Png"] = "png";
    ImageFormat["Jpeg"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
var ImageBuilder = /** @class */ (function () {
    function ImageBuilder() {
        this.formats = [];
        this.resolution = [];
    }
    ImageBuilder.prototype.addPng = function () {
        if (this.formats.indexOf(ImageFormat.Png) !== -1) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    };
    ImageBuilder.prototype.addJpeg = function () {
        if (this.formats.indexOf(ImageFormat.Jpeg) !== -1) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    };
    ImageBuilder.prototype.addResolution = function (width, height) {
        this.resolution.push({ width: width, height: height });
        return this;
    };
    ImageBuilder.prototype.build = function () {
        var res = [];
        for (var _i = 0, _a = this.resolution; _i < _a.length; _i++) {
            var r = _a[_i];
            for (var _b = 0, _c = this.formats; _b < _c.length; _b++) {
                var f_1 = _c[_b];
                res.push({
                    format: f_1,
                    width: r.width,
                    height: r.height
                });
            }
        }
        return res;
    };
    return ImageBuilder;
}());
console.log(new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build());
