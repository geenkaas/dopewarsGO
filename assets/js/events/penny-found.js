// penny-found.js
// Script for handling encounters

'use strict';

function pennyFound() {

    var eventAmount = Math.floor(Math.random() * 100) + 1;

    var eventRandom = Math.random();
    var dopeText;
    if (eventRandom > 0.33) {
        dopeText = 'Someone left some cash in an alley, you find $'+ eventAmount +'.';
    } else if (eventRandom > 0.66) {
        dopeText = 'Your auntie May died and she left you $'+ eventAmount +' inheritance.';
    } else {
        dopeText = 'The cashier made a mistake on your change, you keep $'+ eventAmount +' extra.';
    }

    var eventContent = ('\
        <h2>Free monies!</h2>\
        <p>'+ dopeText +'</p>\
        <div class="button" js-modal-close>Rad!</div>\
    ');
    createModal(eventContent);
    player.cash += eventAmount;
    updateStats();
};