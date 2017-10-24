// find-coat.js
// Script for handling encounters

'use strict';

function findCoat() {

    var eventContent = ('\
        <h2>Trench coat</h2>\
        <p>You find an awesome trenchcoat with extra pockets!</p>\
        <div class="c-button-group">\
            <div class="button" js-modal-close>Stylish!</div>\
        </div>\
    ');
    player.invMax += 10;
    updateStats();
    createModal(eventContent);
};