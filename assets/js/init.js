// init-screen.js
// Screen refreshing and buildup

'use strict';

require('./game-core/all.js');
require('../scss/style.scss');


var screenHeight;

$(window).load(function() {
    initScreen();
})

function initScreen() {
    screenHeight = $('.c-slide--active').height();
    $('.s-site').height(screenHeight);

    slideButtons();
    updateStats();
    updateVersion();
    buildTable();
    initGame();
    popupPlayerName();
}