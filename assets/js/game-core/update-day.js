// update-day.js

'use strict';

function updateDay() {
    setRandomPrices();
    if (player.dayCurr >= player.dayMax) {
        removeSlide($(this).closest('.c-slide'));


        var eventContent = ('\
            <h2>Doperun over!</h2>\
            <p>What a run! You still have some dope in your pockets, what do you want to do with them?</p>\
            <div class="c-button-group">\
                <div class="button" js-game-end-sell>Sell them</div>\
                <div class="button" js-game-end-send>Send to my house</div>\
            </div>\
        ');
        //<p>What a run! Your final score is '+ endScore +'</p>\
        createModal(eventContent);

        $('[js-game-end-sell]').on('tap', function() {
            sellRemainingDope()
        })


        var endScore = digits(player.cash)
        sellRemainingDope();

        restartButtons();
    } else {
        player.dayCurr += 1;
        updateStats();
        randomEvents();
    }
}

function sellRemainingDope() {
    dopelist.forEach(function(dope) {
        var dopeCurr = $('[data-js-dope="'+ dope.name +'"]');
        var dopeAmount = parseInt(dopeCurr.find('[js-dope-amount]').html());
        if (dopeAmount > 0) {

            var cashLeftOver = parseInt(dopeCurr.find('[js-dope-price]').html());
            player.cash += cashLeftOver * dopeAmount;
        }
    })
    updateStats();
}