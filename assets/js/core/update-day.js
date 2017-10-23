// update-day.js

'use strict';

function updateDay() {
    setRandomPrices();
    if (player.dayCurr >= player.dayMax) {

        dopelist.forEach(function(dope) {
            var dopeCurr = $('[data-js-dope="'+ dope.name +'"]');
            var dopeAmount = parseInt(dopeCurr.find('[js-dope-amount]').html());
            if (dopeAmount > 0) {

                var cashLeftOver = parseInt(dopeCurr.find('[js-dope-price]').html());
                player.cash += cashLeftOver * dopeAmount;
            }
        })
        updateStats();
        removeSlide($(this).closest('.c-slide'));

        var endScore = digits(player.cash)

        var eventContent = ('\
            <h2>Doperun over!</h2>\
            <p>What a run! Your final score is '+ endScore +'</p>\
            <div class="c-button-group">\
                <div class="button" js-game-restart>Again!</div>\
            </div>\
        ');
        createModal(eventContent);
        restartButtons();
    } else {
        player.dayCurr += 1;
        updateStats();
        randomEvents();
    }
};