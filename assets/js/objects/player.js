// player.js
// Keep track of player stats

// 'use strict';

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

// Create new player type called player
var player = Object.create(PlayerConstruct);