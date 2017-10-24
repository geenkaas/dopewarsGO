// modal.js
// jQuery modular popup functionalities

'use strict';

function createModal(content) {
   $('body').append('\
        <div class="c-modal">\
            <div class="c-modal__content">\
                ' + content + '\
            </div>\
        </div>\
    ').fadeIn(200);
    modalButtons();
}