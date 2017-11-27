//audio.js

// 'use strict';

var theme = new Audio();
theme.src = '../dist/audio/dopewars-theme-v1.mp3';

$('[data-audio-toggle]').on('click', function() {
    if (theme.paused) {
        theme.play();
        $(this).addClass('playing');
    } else {
        theme.pause();
        $(this).removeClass('playing');
    }
});

//The Warriors Full Theme Song
//https://www.youtube.com/watch?v=ByT0FErPgfQ

//John Carpenter & Alan Howarth - 1997: Fuga Da New York
//https://www.youtube.com/watch?v=WXgEL7blEyA

//Apollo 440 - Electro Glide In Blue
//https://www.youtube.com/watch?v=sGjfLuVn44Q