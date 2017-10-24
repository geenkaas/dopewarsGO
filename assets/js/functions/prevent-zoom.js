// Prevent zoom on iOs 10+
// https://stackoverflow.com/questions/37808180/disable-viewport-zooming-ios-10-safari

'use strict';

// https://stackoverflow.com/questions/15804296/how-to-prevent-doubletap-zoom-in-ios-and-android
// (function($) {
//     $.fn.nodDoubleTapZoom = function() {
//         $(this).bind('touchstart', function preventZoom(e) {
//             var t2 = e.timeStamp;
//             var t1 = $(this).data('lastTouch') || t2;
//             var dt = t2 - t1;
//             var fingers = e.originalEvent.touches.length;
//             $(this).data('lastTouch', t2);
//             if (!dt || dt > 200 || fingers > 1) {
//                 return; // not double-tap
//             }
//             e.preventDefault(); // double tap - prevent the zoom
//             // also synthesize click events we just swallowed up
//             $(e.target).trigger('tap');
//         });
//     }
// })(jQuery);

// $(document).on('pagecreate','.s-site', function() {
//     $('body').nodDoubleTapZoom();
// });

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