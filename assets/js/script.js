// init-screen.js
// Screen refreshing and buildup

// Start the SCSS build
require('./../scss/style.scss');

// Import ALL the scripts
// TODO: place import.js in each subfolder and call single files from there.
import './buttons/import';
import './firebase/auth-email';
import './firebase/init';
import './firebase/auth-facebook';
import './firebase/auth-username';
import './firebase/firestore';
import './firebase/score';
import './objects/dope';
import './objects/local-storage';
import './objects/player';
import './objects/random-events';
import './objects/version';
import './game-core/build-table';
import './game-core/button-trade';
import './game-core/content-slides';
import './game-core/disable-buttons';
import './game-core/dope-amount';
import './game-core/dope-prices';
import './game-core/update-day';
import './events/import';
import './interface/build-table';
import './interface/content-slides';
import './interface/game-stats';
import './interface/modal';
import './interface/popup';
import './interface/toggle';
import './interface/popups/player-name';
import './media/audio';
import './tools/datetime';
import './tools/digits';
import './tools/geolocation';
import './tools/prevent-zoom';
import './tools/random-array';
import './tools/random-dope';

// Self calling function to get stuff rolling
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

        slideButtons();
        updateStats();
        updateVersion();
        buildTable();
        buttonJet();
        buttonDays();
        popupPlayerName();
    }

}());
