// find-gun.js
// Script for handling encounters

// 'use strict';

function findGun() {

    var gunPrice = 100;
    var eventContent;
    if (player.cash >= gunPrice) {
        eventContent = ('\
            <h2>Carrying</h2>\
            <p>Do you want to buy a gun for $'+ gunPrice +'?</p>\
            <div class="c-button-group c-gun__controls">\
                <div class="button button--inline" data-gun-buy>Yeah!</div>\
                <div class="button button--inline" data-modal-close>Nah</div>\
            </div>\
        ');
    } else {
        eventContent = ('\
            <h2>Low on cash</h2>\
            <p>Someone offers to sell you a bigger gun for $'+ gunPrice +' but you are broke!</p>\
            <div class="c-gun__controls">\
                <div class="button" data-modal-close>Bummer!</div>\
            </div>\
        ');
    }
    createModal(eventContent);
    buyGunButton();

    function buyGunButton() {
        $('[data-gun-buy]').on('tap', function() {
            player.cash -= 100;
            player.invCurr += 5;
            player.gun += 1;
            updateStats();
            $(this).closest('.c-modal').fadeOut(200, function() { $(this).remove(); });
        });
    }
}