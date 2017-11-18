// update-day.js

'use strict';

function updateDay() {
    setRandomPrices();
    if (player.dayCurr >= player.dayMax) {

        // FIRESTORE
        // Add one to your player finished game counter in Firebase
        updateScore('gamesFinished', 1);

        dopelist.forEach(function(dope) {
            var dopeCurr = $('[data-dope="'+ dope.name +'"]');
            var dopeAmount = parseInt(dopeCurr.find('[data-dope-amount]').html());
            if (dopeAmount > 0) {

                var cashLeftOver = parseInt(dopeCurr.find('[data-dope-price]').html());
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
                <div class="button" data-game-restart data-game-end data-game-won>Again!</div>\
            </div>\
        ');
        createModal(eventContent);
        buttonRestart();
    } else {
        player.dayCurr += 1;
        updateStats();
        randomEvents();
    }
}