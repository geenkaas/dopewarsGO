// Prevent zoom on iOs 10+
// https://stackoverflow.com/questions/37808180/disable-viewport-zooming-ios-10-safari

'use strict';

document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if(event.scale > 1) {
        event.preventDefault();
    }
}, false);
