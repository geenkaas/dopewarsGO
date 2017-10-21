// modal.js
// jQuery modular popup functionalities

'use strict';

function modalButtons() {
    $('.c-modal__close, [js-modal-close]').on('click', function() {
        $(this).closest('.c-modal').fadeOut(200, function() { $(this).remove(); });
    });
};

function createModal(content) {
   $('body').append('\
        <div class="c-modal">\
            <div class="c-modal__content">\
                ' + content + '\
            </div>\
        </div>\
    ').fadeIn(200);
    modalButtons();
};
