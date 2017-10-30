//player-name.js

'use strict';

function popupPlayerName() {
    //console.log('hoi');
    $('[js-popup-playerName]').addClass('active').show();

    playerNameSelect();
}

function playerNameSelect() {
    var initial = $('[js-tag]').find('.c-playerInitial');
    initial.first().addClass('active');
    $('.c-playerLetter').on('click', function() {
        var whichLetter = $(this).html();
        var next = $('[js-tag]').find('.c-playerInitial.active').html(whichLetter).removeClass('active').next();
        if (next.length) {
            next.addClass('active');
        }
        else {
            initial.first().addClass('active');
            $('[js-button-saveName]').removeClass('button--disabled').on('click', function() {
                var newName = '';
                initial.each(function() {
                    newName += $(this).html();
                })
                localStorage.playerName = newName;
                console.log(localStorage.playerName);
                $('[js-popup-playerName]').fadeOut(200);
            });
        }
    })

    $('.c-playerInitial').on('click', function() {
        $('.c-playerInitial').removeClass('active');
        $(this).addClass('active');
    })
}