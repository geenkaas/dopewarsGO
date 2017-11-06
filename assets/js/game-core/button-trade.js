// button-trade.js

'use strict';

function buttonTradeInit() {
    //console.log('buttons init');
    $.event.special.tap.tapholdThreshold = 400;
    $('.button--trade').on('tap', function() {
        buttonTrade($(this), 'tap');
    }).on('taphold', function() {
        buttonTrade($(this), 'taphold');
    });
    
    setRandomPrices();
}

function buttonTrade(thisButton, action) {

    // Don't do anything when buttons are disabled
    if (!thisButton.hasClass('button--disabled')) {

        var clickRow = thisButton.closest('tr');
        var clickDope = clickRow.attr('data-js-dope');
        var cashTrade = parseInt(clickRow.find('[js-dope-price]').html());

        var amount;

        // Check whether user pressed or held button
        if (action === 'tap') {
            if (thisButton.hasClass('button--buy')) {
                amount = 1;
            } else {
                amount = -1;
            }
        } else {
            if (thisButton.hasClass('button--buy')) {
                amount = Math.floor(player.cash / cashTrade);
            } else {
                amount = clickRow.find('[js-dope-amount]').html() * - 1;
            }
        }

        // Do a check that you cannot buy or sell more that your inventory allows
        var invCurr = player.invCurr;
        var invMax = player.invMax;
        var invFree = invMax - invCurr;
        if (amount > invFree) {
            amount = invFree;
        }

        //var cashAfterTrade = ( * -1);
        player.cash -= cashTrade * amount;
        updateStats();
        updateDopeAmount(clickDope, amount);
    }
}