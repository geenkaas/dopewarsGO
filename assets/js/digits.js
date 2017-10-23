// digits.js
// Replace numbers with digits
// https://stackoverflow.com/questions/1990512/add-comma-to-numbers-every-three-digits
//
// You could then use it like this:
//
// $("span.numbers").digits();

// Beter use:
// var number = 1557564534;
// document.body.innerHTML = number.toLocaleString();
// 1,557,564,534

'use strict';

function formatNumber(number, decimals, dec_point, thousands_point) {
    if (number == null || !isFinite(number)) {
        throw new TypeError("number is not valid");
    }
    if (!decimals) {
        var len = number.toString().split('.').length;
        decimals = len > 1 ? len : 2;
    }
    if (!dec_point) {
        dec_point = ',';
    }
    if (!thousands_point) {
        thousands_point = '.';
    }
    number = parseFloat(number).toFixed(decimals);
    number = number.replace(".", dec_point);
    var splitNum = number.split(dec_point);
    splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
    number = splitNum.join(dec_point);
    return number;
}