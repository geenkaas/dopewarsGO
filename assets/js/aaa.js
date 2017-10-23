//aaa.js

// player.js
// Keep track of player stats

'use strict';

var PlayerConstruct = {
    health: 100,
    cash: 2000,
    invCurr: 0,
    invMax: 50,
    damage: 20,
    gun: 0,
    dayCurr: 1,
    dayMax: 7
};

// Create new player type called player1 
var player = Object.create(PlayerConstruct);

// Update game stats
function updateStats() {
    $('[js-day-curr]').html(player.dayCurr);
    $('[js-day-max]').html(player.dayMax);
    $('[js-cash]').find('span').html(digits(player.cash));
    $('[js-inv-curr]').html(player.invCurr);
    $('[js-inv-max]').html(player.invMax);
};
updateStats();