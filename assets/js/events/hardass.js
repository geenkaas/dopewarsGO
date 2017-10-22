// hardass.js
// Script for handling encounters with Officer Hardass

'use strict';

function officerHardass() {

    var HardassConstruct = {
        health: 100,
        loot: 50,
        damage: 10,
        winchance: 60
    };

    // Create new player type called player1 
    var hardass = Object.create(HardassConstruct);

    var eventContent = ('\
        <h2>The pigs!</h2>\
        <p>Officer Hardass and his deputies are chasing you! what do you do?</p>\
        <div class="s-row c-combat">\
            <div class="s-row__column s-row__column--half">\
                Hardass: <div class="c-health c-health--enemy"><span>'+ hardass.health +'</span></div>\
            </div>\
            <div class="s-row__column s-row__column--half">\
                You: <div class="c-health c-health--player"><span>'+ player.health +'</span></div>\
            </div>\
        </div>\
        <div class="c-combat__controls">\
            <div class="button button--inline" js-combat-run js-modal-close>Run</div>\
            <div class="button button--inline" js-combat-fight>Fight</div>\
            <div class="button button--inline" js-combat-bribe>Bribe</div>\
        </div>\
        <p class="c-combat__result"></p>\
    ');

    createModal(eventContent);

    $('[js-combat-fight]').on('tap', function() {
        var RoundText;
        if (hardass.winchance >= (Math.random() * 100)) {
            //console.log('won!');
            RoundText = 'You shot officer Hardass!';
            var damageDone = Math.ceil(player.damage * Math.random()) * (player.gun + 1) + player.damage;
            hardass.health -= damageDone;
            if (hardass.health <= 0) {
                hardass.health = 0;
                $('.c-combat__controls').hide();
                var lootCash = Math.ceil(hardass.loot * Math.random()) + hardass.loot;
                RoundText = 'Officer Hardass drops dead!<br />On his body you find $'+ lootCash +'.';
                //player.cash += lootCash;
                updateCash(lootCash);
                $('.c-combat__result').after('<div class="button" js-modal-close>Later Hardass</div>');
                modalButtons();
            }
            $('.c-health--enemy span').html(hardass.health).css('width', hardass.health + '%');
        } else {
            //console.log('lost!');
            RoundText = 'Officer Hardass takes a shot at you...';
            var damageReceived = Math.ceil(hardass.damage * Math.random()) + hardass.damage;
            player.health -= damageReceived;

            if (player.health <= 0) {
                player.health = 0;
                $('.c-combat__controls').hide();
                RoundText = 'Officer Hardass shot you dead sucker!<br />Your final score is: ' + $('[js-cash]').find('span').html();

                $('.c-combat__result').after('<div class="button" js-game-restart>Ah man!</div>');
                restartButtons();
            }
            $('.c-health--player span').html(player.health).css('width', player.health + '%');

        }
        $('.c-combat__result').html(RoundText);
    });
};
