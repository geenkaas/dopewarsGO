// game-stats.js
// Update game stats

'use strict';

function updateStats() {
    $('[js-day-curr]').html(player.dayCurr);
    $('[js-day-max]').html(player.dayMax);
    $('[js-cash]').find('span').html(digits(player.cash));
    $('[js-inv-curr]').html(player.invCurr);
    $('[js-inv-max]').html(player.invMax);
}