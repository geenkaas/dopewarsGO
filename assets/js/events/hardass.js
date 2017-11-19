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
            <div class="button button--inline" data-combat-run>Run</div>\
            <div class="button button--inline" data-combat-fight>Fight</div>\
            <div class="button button--inline" data-combat-bribe>Bribe</div>\
        </div>\
    ');

    createModal(eventContent);
    // Set player healthbar to current health
    $('.c-health--player span').html(player.health).css('width', player.health + '%');


    // Bribe button
    $('[data-combat-bribe]').on('tap', function() {
        var bribeAmount = Math.ceil(hardass.bribeCost * Math.random()) + hardass.bribeCost;
        var roundText;
        if (player.cash < bribeAmount) {
            roundText = 'Maybe you should save some cash first, dipshit...'
            $('[data-combat-bribe]').hide();
        } else {
            roundText = 'Ill see it through the fingers this time.<br />But its gonna cost ya $'+ bribeAmount +'.';
        }

        $('.c-combat__result').html(roundText);

        payButtons();

        // Pay Bribe button
        function payButtons() {
            $('[data-combat-bribe]').html('pay').on('tap', function() {
                player.cash -= bribeAmount;
                updateStats();
                $(this).closest('.c-modal').fadeOut(200, function() { $(this).remove(); });
            });
        }
    });

    // Run button
    $('[data-combat-run]').on('tap', function() {
        var roundText;
        if (hardass.escapeChance >= (Math.random() * 100)) {
            //console.log('you escaped!');

            $('.c-combat__controls').hide();
            roundText = 'You got away!';
            $('.c-combat').after('<div class="button" data-modal-close>Too close</div>');
            buttonModal();
        } else {
            var chaseDistance = Math.ceil(Math.random() * 4);
            if (hardass.biteChance >= (Math.random() * 100)) {
                var biteDamage = Math.ceil(hardass.damage * Math.random()) + 2;
                roundText = 'Police dogs chase your for '+ chaseDistance +' blocks<br />You were bit for '+ biteDamage +' damage!';
                player.health -= biteDamage;

                if (player.health <= 0) {

                    // FIRESTORE
                    // Add one to your player finished game counter in Firebase
                    fireStoreUpdate('gamesFinished', 1);
                    fireStoreUpdate('gamesLost', 1);

                    player.health = 0;
                    $('.c-combat__controls').hide();
                    roundText = 'Police dogs grab you and you bleed out on the streets. Your final score is: ' + digits(player.cash);

                    $('.c-combat').after('<div class="button" data-game-restart data-game-end data-game-lost>Nasty</div>');
                    buttonRestart();
                }
                $('.c-health--player span').html(player.health).css('width', player.health + '%');
            } else {
                roundText = 'Police dogs chase your for '+ chaseDistance +' blocks';
            }
        }
        $('.c-combat__result').html(roundText);
    });

    // Fight button
    $('[data-combat-fight]').on('tap', function() {
        var roundText;
        if (hardass.winChance >= (Math.random() * 100)) {
            //console.log('won!');
            roundText = 'You shot officer Hardass!';
            var damageDone = Math.ceil(player.damage * Math.random()) * (player.gun + 1) + player.damage;
            hardass.health -= damageDone;
            if (hardass.health <= 0) {

                // FIRESTORE
                // Add one to your player finished game counter in Firebase
                fireStoreUpdate('killedHardass', 1);

                hardass.health = 0;
                $('.c-combat__controls').hide();
                var lootCash = Math.ceil(hardass.loot * Math.random()) + hardass.loot;
                roundText = 'Officer Hardass drops dead!<br />On his body you find $'+ lootCash +'.';
                player.cash += lootCash;
                updateStats();
                $('.c-combat').after('<div class="button" data-modal-close>Later Hardass</div>');
                buttonModal();
            }
            $('.c-health--enemy span').html(hardass.health).css('width', hardass.health + '%');
        } else {
            //console.log('lost!');
            roundText = 'Officer Hardass takes a shot at you.';
            var damageReceived = Math.ceil(hardass.damage * Math.random()) + hardass.damage;
            player.health -= damageReceived;

            if (player.health <= 0) {

                // FIRESTORE
                // Add one to your player finished game counter in Firebase
                fireStoreUpdate('gamesFinished', 1);
                fireStoreUpdate('gamesLost', 1);
                fireStoreUpdate('killedbyHardass', 1);

                player.health = 0;
                $('.c-combat__controls').hide();
                roundText = 'Officer Hardass shot you dead sucker!<br />Your final score is: ' + digits(player.cash);

                $('.c-combat').after('<div class="button" data-game-restart data-game-end data-game-lost>Ah man!</div>');
                buttonRestart();
            }
            $('.c-health--player span').html(player.health).css('width', player.health + '%');

        }
        $('.c-combat__result').html(roundText);
    });
}