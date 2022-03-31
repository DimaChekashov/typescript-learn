"use strict";
function testToString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case "string":
            return data;
        case "number":
        case "symbol":
        case "bigint":
        case "boolean":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(testToString([1, 2, 3]));
console.log(testToString(true));
console.log(testToString(null));
console.log(testToString(12312312));
console.log(testToString({
    id: 1,
    name: 'ban'
}));
