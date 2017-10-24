// dope-found.js
// Script for handling encounters

'use strict';

function dopeFound() {

    var eventDope = randomDope(dopelist).name;

    var eventAmountMax = 5;
    var eventAmount = Math.floor(Math.random() * eventAmountMax) + 1;

    var eventRandom = Math.random();
    var dopeText;
    if (eventRandom > 0.33) {
        dopeText = 'You find '+ eventAmount +' ' + eventDope +' on the subway.';
    } else if (eventRandom > 0.66) {
        dopeText = 'An old friend drops by and he gives you '+ eventAmount +' '+ eventDope +'.';
    } else {
        dopeText = 'In the back of your pocket you find '+ eventAmount +' '+ eventDope +'!';
    }

    // Prevent expensive dope from lying around.
    if (!((eventDope == 'Cocaine') || (eventDope == 'Heroin'))) {

        var eventContent = ('\
            <h2>Free Dope!</h2>\
            <p>'+ dopeText +'</p>\
            <div class="button" js-modal-close>Score!</div>\
        ');
        createModal(eventContent);
        updateDopeAmount(eventDope, eventAmount);
    }
}