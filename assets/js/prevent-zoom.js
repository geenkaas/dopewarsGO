// Prevent zoom on iOs 10+
// https://stackoverflow.com/questions/37808180/disable-viewport-zooming-ios-10-safari

'use strict';

// https://stackoverflow.com/questions/15804296/how-to-prevent-doubletap-zoom-in-ios-and-android
(function($) {
    $.fn.nodDoubleTapZoom = function() {
        $(this).bind('touchstart', function preventZoom(e) {
            var t2 = e.timeStamp;
            var t1 = $(this).data('lastTouch') || t2;
            var dt = t2 - t1;
            var fingers = e.originalEvent.touches.length;
            $(this).data('lastTouch', t2);
            if (!dt || dt > 500 || fingers > 1) {
                return; // not double-tap
            }
            e.preventDefault(); // double tap - prevent the zoom
            // also synthesize click events we just swallowed up
            $(e.target).trigger('click');
        });
    };
})(jQuery);

$(document).on('pagecreate','.s-site', function() {
    $('body').nodDoubleTapZoom();
});
