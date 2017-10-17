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

$.fn.digits = function() { 
    return this.each(function() { 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}
