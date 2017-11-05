//player-name.js

'use strict';

function popupPlayerName() {

    if (readCookie('playerName') === null) {
        var yourname = Version.quote;
        $('[js-version-quote]').html(yourname);
        playerNameSelect();
    } else {
        $('[js-version-quote]').html('Welcome back ' + readCookie('playerName').toUpperCase());
    }
}

$('[js-changename]').on('click', function() {
    $('.c-mainmenu').hide();
    playerNameSelect();
})

function playerNameSelect() {
    $('[js-popup-playerName]').addClass('active').show();
    //$('[js-tag]').find('.c-playerInitial').hide();
    var initials = $('[js-tag]').find('.c-playerInitial');
    initials.first().addClass('active');
    $('.c-playerLetter').on('click', function() {
        var whichLetter = $(this).html();
        //console.log(initials)
        
        //console.log(whichLetter);
        var next = $('.c-playerInitial.active').removeClass('active').html(whichLetter).next();
        //console.log(next.length);
        if (next.length) {
            //console.log('next!');
            next.addClass('active');
        }
        else {
            //console.log('no more!!!');
            initials.removeClass('active');
            $('[js-button-saveName]').removeClass('button--disabled').on('click', function() {
                var newName = '';
                initials.each(function() {
                    newName += $(this).html();
                })
                createCookie('playerName', newName);
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