// init-screen.js
// Screen refreshing and buildup

'use strict';

var screenHeight;

$(window).load(function() {
    initScreen();
})

function initScreen() {
    screenHeight = $('.c-slide--active').height();
    $('.s-site').height(screenHeight);

    slideButtons();
    console.log('ho');
    updateStats();
    updateVersion();
    buildTable();
    buttonJet();
    buttonDays();
    popupPlayerName();
}
