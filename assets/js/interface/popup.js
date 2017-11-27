// popup.js

// 'use strict';

$('[data-popup]').on('tap', function() {
    var target = $(this).attr('data-popup');
    //console.log(target);
    $('['+ target +' ]').toggleClass('active');
});
