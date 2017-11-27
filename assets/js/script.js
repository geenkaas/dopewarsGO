// init-screen.js
// Screen refreshing and buildup

import './buttons/import';

(function () {
   'use strict';
   // this function is strict...

    var screenHeight;


    $(window).load(function() {
        initScreen();
    });

    function initScreen() {
        screenHeight = $('.c-slide--active').height();
        $('.s-site').height(screenHeight);

        // slideButtons();
        // updateStats();
        // updateVersion();
        // buildTable();
        // buttonJet();
        // buttonDays();
        // popupPlayerName();
    }

}());
