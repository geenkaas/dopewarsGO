//player-name.js

'use strict';

function popupPlayerName() {
    //console.log('hoi');

    if (readCookie(playerName) !== null) {
        $('[js-popup-playerName]').addClass('active').show();
        playerNameSelect();
    }
}

function playerNameSelect() {
    var initials = $('[js-tag]').find('.c-playerInitials');
    initials.first().addClass('active');
    $('.c-playerLetter').on('click', function() {
        var whichLetter = $(this).html();
        var next = $('[js-tag]').find('.c-playerInitials.active').html(whichLetter).removeClass('active').next();
        if (next.length) {
            next.addClass('active');
        }
        else {
            initials.first().addClass('active');
            $('[js-button-saveName]').removeClass('button--disabled').on('click', function() {
                var newName = '';
                initials.each(function() {
                    newName += $(this).html();
                })
                createCookie(playerName, newName);
                console.log(readCookie(playerName));
                $('[js-popup-playerName]').fadeOut(200);
            });
        }
    })

    $('.c-playerInitial').on('click', function() {
        $('.c-playerInitial').removeClass('active');
        $(this).addClass('active');
    })
}