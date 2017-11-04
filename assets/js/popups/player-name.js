//player-name.js

'use strict';

function popupPlayerName() {
    //console.log(readCookie('playerName'));

    if (readCookie('playerName') === 'null') {
        $('[js-popup-playerName]').addClass('active').show();
        playerNameSelect();
    } else {
    }

}

function playerNameSelect() {
    var initials = $('[js-tag]').find('.c-playerInitials').hide();
    initials.first().addClass('active');
    $('.c-playerLetter').on('click', function() {
        var whichLetter = $(this).html();
        console.log(whichLetter);
        var next = $('[js-tag]').find('.c-playerInitials.active').html(whichLetter).removeClass('active').next();
        if (next.length) {
            next.addClass('active');
        }
        else {
            initials.addClass('active');
            $('[js-button-saveName]').removeClass('button--disabled').on('click', function() {
                var newName = '';
                initials.each(function() {
                    newName += $(this).html();
                })
                createCookie('playerName', newName);
                console.log(newName);
                console.log(readCookie('playerName'));
                $('[js-popup-playerName]').fadeOut(200);
            });
        }
    })

    // Maunual select initial to change
    $('.c-playerInitial').on('click', function() {
        $('.c-playerInitial').removeClass('active');
        $(this).addClass('active');
    })
}