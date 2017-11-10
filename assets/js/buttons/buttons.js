// buttons.js
// General button funtionality

'use strict';

function buttonRestart() {

    $('[js-game-restart]').on('tap', function() {
        //console.log('dead');
        window.location.reload(true);
    });

}

function buttonModal() {

    $('[js-modal-close]').on('tap', function() {
        $(this).closest('.c-modal').fadeOut(200, function() {
        	$(this).remove();
        });
    });

}

function buttonJet() {

    $('[js-button-jet]').on('tap', function() {
        if (!$(this).hasClass('button--disabled')) {
            updateDay();
        }
    });

}

function buttonDays() {

    $('[js-length]').on('tap', function() {
        $(this).removeClass('button--deselect');
        $('[js-length]').not($(this)).addClass('button--deselect')
        var length = $(this).attr('data-game-length');
        if (length > 7) {
            player.invMax = 100;
        } else {
            player.invMax = 50;
        }
        player.dayMax = length;
        updateStats();
        $('[js-slide-button]').removeClass('button--disabled');
    });

}