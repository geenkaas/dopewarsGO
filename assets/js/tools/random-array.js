// random-array.js

// 'use strict';

// General function to get one random form array
// https://stackoverflow.com/questions/6470121/jquery-pick-a-random-value-from-a-array-of-strings
function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}