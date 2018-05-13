'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doinger;
function doinger(str) {
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };
    var minMay = function minMay(str) {
        return str.split('').map(function (value, key) {
            return key % 2 ? value.toLowerCase() : value.toUpperCase();
        }).join('');
    };
    var half = Math.round(str.length / 2);

    var translation = str;

    if (str == reverse(str)) translation = minMay(str);

    if (str.toLowerCase().endsWith('ar')) translation = str.slice(0, -2);

    if (str.toLowerCase().startsWith('z')) translation += 'pe';

    if (str.length >= 10) translation = translation.slice(0, half) + '-' + translation.slice(half);

    return translation;
}