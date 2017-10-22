// player.js
// Keep track of player stats

'use strict';

var PlayerConstruct = {
  health: 100,
  cash: 2000,
  invMax: 50,
  invCurr: 0,
  damage: 20,
  gun: 0
};

// Create new player type called player1 
var player = Object.create(PlayerConstruct);

// Cash
var cashStart = player.cash;
var cashCurr = cashStart;
function updateCash(cashNew) {
    var cashOld = parseInt($('[js-cash]').find('span').html());
    var cashUpdate = cashOld + cashNew;
    $('[js-cash]').find('span').html(cashUpdate);
    cashCurr = parseInt($('[js-cash]').find('span').html());
    //console.log('Variable cashCurr is updated, new cashCurr = ' + cashCurr);
}
updateCash(cashStart);