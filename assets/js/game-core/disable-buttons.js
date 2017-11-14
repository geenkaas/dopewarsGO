// update-buttons.js

'use strict';

function disableButtons() {

    dopelist.forEach(function(dope) {

        var dopeCurr = $('[data-data-dope="'+ dope.name +'"]');
        //console.log(dope);

        var dopeAmount = parseInt(dopeCurr.find('[data-dope-amount]').html());
        var buttonSell = dopeCurr.find('[data-dope-sell]').find('.button--trade');

        if (dopeAmount <= 0) {
            //console.log('sold and none left');
            buttonSell.addClass('button--disabled');
        } else {
            //console.log('sold and more in inv');
            buttonSell.removeClass('button--disabled');
        }

        var dopeCurrPrice = parseInt(dopeCurr.find('[data-dope-price]').html());
        var buttonBuy = dopeCurr.find('[data-dope-buy]').find('.button--trade');

        if (dopeCurrPrice > player.cash) {
            //console.log('bought and no more money left');
            buttonBuy.addClass('button--disabled');
        } else {
            //console.log('bought and ready for more');
            buttonBuy.removeClass('button--disabled');
        }

        var invCurr = $('[data-inv-curr]').html();
        var invMax = $('[data-inv-max]').html();
        var invFree = invMax - invCurr;
        if (invFree <= 0) {
            buttonBuy.addClass('button--disabled');
        }

    })

}