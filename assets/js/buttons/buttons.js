// buttons.js
// General button funtionality

'use strict';

function buttonRestart() {

    $('[data-game-restart]').on('tap', function() {
        //console.log('dead');
        window.location.reload(true);
    });

}

function buttonModal() {

    $('[data-modal-close]').on('tap', function() {
        $(this).closest('.c-modal').fadeOut(200, function() {
        	$(this).remove();
        });
    });

}

function buttonJet() {

    $('[data-button-jet]').on('tap', function() {
        if (!$(this).hasClass('button--disabled')) {
            updateDay();
        }
    });

}

function buttonDays() {

    $('[data-length]').on('tap', function() {
        $(this).removeClass('button--deselect');
        $('[data-length]').not($(this)).addClass('button--deselect')
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