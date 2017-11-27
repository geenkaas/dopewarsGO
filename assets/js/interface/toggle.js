// mainmenu.js

// 'use strict';

$('[data-toggle]').on('click', function() {
    var target = $(this).attr('data-toggle');
    //console.log(target);
    $('.' + target).toggleClass('active').slideToggle();
});
