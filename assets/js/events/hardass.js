// hardass.js
// Script for handling encounters with Officer Hardass

'use strict';

function officerHardass() {

    var HardassConstruct = {
        health: 100,
        loot: 50,
        damage: 10,
        winChance: 50,
        escapeChance: 30,
        biteChance: 70,
        dropChance: 50,
        bribeCost: 500
    }

    // Create new player type called player1
    var hardass = Object.create(HardassConstruct);

    var eventContent = ('\
        <h2>The pigs!</h2>\
        <p class="c-combat__result">Officer Hardass and his deputies are chasing you! What do you do?</p>\
        <div class="s-row c-combat">\
            <div class="s-row__column s-row__column--half">\
                Hardass: <div class="c-health c-health--enemy"><span>'+ hardass.health +'</span></div>\
            </div>\
            <div class="s-row__column s-row__column--half">\
                You: <div class="c-health c-health--player"><span>'+ player.health +'</span></div>\
            </div>\
        </div>\
        <div class="c-button-group c-combat__controls">\
            <div class="button button--inline" js-combat-run>Run</div>\
            <div class="button button--inline" js-combat-fight>Fight</div>\
            <div class="button button--inline" js-combat-bribe>Bribe</div>\
        </div>\
    ');

    createModal(eventContent);
    $('.c-health--player span').html(player.health).css('width', player.health + '%');


    // Bribe button
    $('[js-combat-bribe]').on('tap', function() {
        var bribeAmount = Math.ceil(hardass.bribeCost * Math.random()) + hardass.bribeCost;
        var roundText;
        if (player.cash < bribeAmount) {
            roundText = 'Maybe you should save some cash first, dipshit...'
            $('[js-combat-bribe]').hide();
        } else {
            roundText = 'Ill see it through the fingers this time.<br />But its gonna cost ya $'+ bribeAmount +'.';
        }

        $('.c-combat__result').html(roundText);

        payButtons();

        // Pay Bribe button
        function payButtons() {
            $('[js-combat-bribe]').html('pay').on('tap', function() {
                player.cash -= bribeAmount;
                updateStats();
                $(this).closest('.c-modal').fadeOut(200, function() { $(this).remove(); });
            });
        }
    });

    // Run button
    $('[js-combat-run]').on('tap', function() {
        var roundText;
        if (hardass.escapeChance >= (Math.random() * 100)) {
            //console.log('you escaped!');

            $('.c-combat__controls').hide();
            roundText = 'You got away!';
            $('.c-combat').after('<div class="button" js-modal-close>Too close</div>');
            modalButtons();
        } else {
            var chaseDistance = Math.ceil(Math.random() * 4);
            if (hardass.biteChance >= (Math.random() * 100)) {
                var biteDamage = Math.ceil(hardass.damage * Math.random()) + 2;
                roundText = 'Police dogs chase your for '+ chaseDistance +' blocks<br />You were bit for '+ biteDamage +' damage!';
                player.health -= biteDamage;

                if (player.health <= 0) {
                    player.health = 0;
                    $('.c-combat__controls').hide();
                    roundText = 'Police dogs grab you and you bleed out on the streets. Your final score is: ' + digits(player.cash);

                    $('.c-combat').after('<div class="button" js-game-restart>Nasty</div>');
                    restartButtons();
                }
                $('.c-health--player span').html(player.health).css('width', player.health + '%');
            } else {
                roundText = 'Police dogs chase your for '+ chaseDistance +' blocks';
            }
        }
        $('.c-combat__result').html(roundText);
    });

    // Fight button
    $('[js-combat-fight]').on('tap', function() {
        var roundText;
        if (hardass.winChance >= (Math.random() * 100)) {
            //console.log('won!');
            roundText = 'You shot officer Hardass!';
            var damageDone = Math.ceil(player.damage * Math.random()) * (player.gun + 1) + player.damage;
            hardass.health -= damageDone;
            if (hardass.health <= 0) {
                hardass.health = 0;
                $('.c-combat__controls').hide();
                var lootCash = Math.ceil(hardass.loot * Math.random()) + hardass.loot;
                roundText = 'Officer Hardass drops dead!<br />On his body you find $'+ lootCash +'.';
                player.cash += lootCash;
                updateStats();
                $('.c-combat').after('<div class="button" js-modal-close>Later Hardass</div>');
                modalButtons();
            }
            $('.c-health--enemy span').html(hardass.health).css('width', hardass.health + '%');
        } else {
            //console.log('lost!');
            roundText = 'Officer Hardass takes a shot at you.';
            var damageReceived = Math.ceil(hardass.damage * Math.random()) + hardass.damage;
            player.health -= damageReceived;

            if (player.health <= 0) {
                player.health = 0;
                $('.c-combat__controls').hide();
                roundText = 'Officer Hardass shot you dead sucker!<br />Your final score is: ' + digits(player.cash);

                $('.c-combat').after('<div class="button" js-game-restart>Ah man!</div>');
                restartButtons();
            }
            $('.c-health--player span').html(player.health).css('width', player.health + '%');

        }
        $('.c-combat__result').html(roundText);
    });
}