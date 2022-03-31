"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
var gres = logMiddleware("Hello World!");
function getSplitedHalf(data) {
    var l = data.length / 2;
    return data.splice(0, l);
}
var garr = getSplitedHalf([1, 2, 3, 4, 5, 6]);
