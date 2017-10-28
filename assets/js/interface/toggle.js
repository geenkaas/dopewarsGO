// mainmenu.js

'use strict';

$('[js-toggle]').on('click', function() {
    var target = $(this).attr('data-target');
    //console.log(target);
    $('.' + target).toggleClass('active').slideToggle();
})