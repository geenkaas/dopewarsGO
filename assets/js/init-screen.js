// init-screen.js
// Screen refreshing and buildup

'use strict';

var screenHeight;

$(window).load(function() {
    initScreen();
});

function initScreen() {
    screenHeight = $('.c-slide--active').height();
    console.log(screenHeight);
    $('.s-site').height(screenHeight);
    console.log($('.s-site').height());
};
