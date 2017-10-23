// random-dope.js

'use strict';

// Get a simple list with all dope
// Dope list constructor function
function dopeArray(name) {
    this.name = name
}

var dopeMap = [];
dopelist.forEach(function(dope) {
    dopeMap.push(new dopeArray(dope.name));
    //console.log(event.name + " chance: " + getEventChange(event, eventTotal) + '%. Range <= ' + range);
});

// General function to select one random dope
// https://stackoverflow.com/questions/45950245/jquery-pick-a-random-property-from-an-object
var randomDope = function(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};