//player-name.js

'use strict';

function popupPlayerName() {

    if (readCookie('playerName') === null) {
    //     var yourname = Version.quote;
    //     $('[data-version-quote]').html(yourname);
        playerNameSelect();
    } else {
        // $('[data-version-quote]').html('Welcome back ' + readCookie('playerName').toUpperCase());
    }
}

$('[data-changename]').on('tap', function() {
    $('.c-mainmenu').hide();
    playerNameSelect();
})

function playerNameSelect() {
    // Hide all popups
    $('.c-popup').hide();
    $('.c-playerLetter').off();
    $('[data-popup-playerName]').addClass('active').show();
    //$('[data-tag]').find('.c-playerInitial').hide();
    var initials = $('[data-tag]').find('.c-playerInitial');
    initials.first().addClass('active');
    $('.c-playerLetter').on('tap', function() {
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
            $('[data-button-saveName]').removeClass('button--disabled').on('tap', function() {
                var newName = '';

                $(this).html('preinitial');
                initials.each(function() {
                    newName += $(this).html();
                })
                createCookie('playerName', newName);
                console.log(newName);
                addUserName(newName);
                //console.log(newName);
                //$(this).html(newName);
                $('[data-popup-playerName]').fadeOut(200);
            });
        }
    })

    // Maunual select initial to change
    $('.c-playerInitial').on('tap', function() {
        $('.c-playerInitial').removeClass('active');
        $(this).addClass('active');
    })
}