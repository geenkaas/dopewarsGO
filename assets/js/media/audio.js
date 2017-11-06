//audio.js

'use strict';

var theme = new Audio();
theme.src = '../dist/audio/dopewars-theme-v1.mp3';

$('[js-audio-toggle]').on('click', function() {
    if (theme.paused) {
        theme.play();
        $(this).addClass('playing');
    } else {
        theme.pause();
        $(this).removeClass('playing');
    }
})