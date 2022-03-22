"use strict";
var n = null;
var n1 = null;
function getCat() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Вася'
        };
    }
}
var cat = getCat();
if (cat) {
    var n55 = cat.name;
}
