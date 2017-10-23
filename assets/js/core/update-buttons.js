// update-buttons.js

'use strict';

function updateButtons() {

    dopelist.forEach(function(dope) {


        var dopeCurr = $('[data-js-dope="'+dope.name+'"]');
        //console.log(dope);

        var dopeAmount = parseInt(dopeCurr.find('[js-dope-amount]').html());
        var buttonSell = dopeCurr.find('[js-dope-sell]').find('.button--trade');

        if (dopeAmount <= 0) {
            //console.log('sold and none left');
            buttonSell.addClass('button--disabled');
        } else {
            //console.log('sold and more in inv');
            buttonSell.removeClass('button--disabled');
        }

        var dopeCurrPrice = parseInt(dopeCurr.find('[js-dope-price]').html());
        var buttonBuy = dopeCurr.find('[js-dope-buy]').find('.button--trade');

        if (dopeCurrPrice > player.cash) {
            //console.log('bought and no more money left');
            buttonBuy.addClass('button--disabled');
        } else {
            //console.log('bought and ready for more');
            buttonBuy.removeClass('button--disabled');
        }

        var invCurr = $('[js-inv-curr]').html();
        var invMax = $('[js-inv-max]').html();
        var invFree = invMax - invCurr;
        if (invFree <= 0) {
            buttonBuy.addClass('button--disabled');
        }

    });
};