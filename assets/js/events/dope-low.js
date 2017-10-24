// dope-low.js
// Script for handling encounters

'use strict';

function dopeLow() {

    var eventDope = randomDope(dopelist);

    var dopeText;
    if (eventDope === 'Hashish') {
        dopeText = 'The Marrakesh Express has arrived!'
    } else {
        dopeText = 'Rival gangs raided some pharmacies and cheap '+ eventDope.name +' has flooded the market'
    }

    var eventContent = ('\
        <h2>Market flooded!</h2>\
        <p>'+ dopeText +'</p>\
        <div class="button" js-modal-close>Cool</div>\
    ');
    var sendDopeName = dopelist.filter(function( eventDope ) {
        return dopelist.name === eventDope;
    });
    createModal(eventContent);
    updateDopePrice(eventDope, 0.1)
}