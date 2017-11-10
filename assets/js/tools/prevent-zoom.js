// Prevent zoom on iOs 10+
// https://stackoverflow.com/questions/37808180/disable-viewport-zooming-ios-10-safari

'use strict';

// https://stackoverflow.com/questions/37808180/disable-viewport-zooming-ios-10-safari
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { 
    	event.preventDefault();
    }
}, false);

var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);