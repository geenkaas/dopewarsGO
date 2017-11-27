// buttons.js
// General button funtionality

function buttonRestart() {

    $('[data-game-restart]').on('tap', function() {
        //console.log('dead');
        window.location.reload(true);
    });

}

function buttonModal() {

    'use strict';

    $('[data-modal-close]').on('tap', function() {
        $(this).closest('.c-modal').fadeOut(200, function() {
        	$(this).remove();
        });
    });

}

function buttonJet() {

    'use strict';

    $('[data-button-jet]').on('tap', function() {
        if (!$(this).hasClass('button--disabled')) {
            updateDay();
        }
    });

}

function buttonDays() {

    'use strict';

    $('[data-game-length]').on('tap', function() {
        $(this).removeClass('button--deselect');
        $('[data-game-length]').not($(this)).addClass('button--deselect');
        var length = $(this).attr('data-game-length');
        if (length > 7) {
            player.invMax = 100;
        } else {
            player.invMax = 50;
        }
        player.dayMax = length;
        updateStats();
        $('[data-slide-button]').removeClass('button--disabled');
    });

}