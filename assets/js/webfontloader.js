// Webfontloader
// https://www.npmjs.com/package/webfontloader

'use strict';

var WebFontConfig = {
    google: {
        families: ['Press+Start+2P']
    },
    timeout: 2000
};

(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.async = 'true';
    document.head.appendChild(wf);
})();
