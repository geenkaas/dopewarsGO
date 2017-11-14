// dope-high.js
// Script for handling encounters

'use strict';

function dopeHigh() {

    var eventDope = randomDope(dopelist);
    var dopeHighArray = [
        'Addicts are buying '+ eventDope.name +' for ridiculous prices!',
        'Cops made a big '+ eventDope.name +' bust! Prices are outrageous!',
        'The police raided a big '+ eventDope.name +' warehouse. Prices have skyrocketed!'
    ];
    var dopeText = randomFrom(dopeHighArray);

    var eventContent = ('\
        <h2>Drug Bust!</h2>\
        <p>'+ dopeText +'</p>\
        <div class="button" data-modal-close>Alright</div>\
    ');
    createModal(eventContent);
    updateDopePrice(eventDope, 2);
}