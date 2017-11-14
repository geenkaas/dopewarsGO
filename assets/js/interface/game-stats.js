// game-stats.js
// Update game stats

'use strict';

function updateStats() {
    $('[data-day-curr]').html(player.dayCurr);
    $('[data-day-max]').html(player.dayMax);
    $('[data-cash]').find('span').html(digits(player.cash));
    $('[data-inv-curr]').html(player.invCurr);
    $('[data-inv-max]').html(player.invMax);
}