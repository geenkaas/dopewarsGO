<template>
    <div class="c-gamecontent">
        <div class="c-player">
            <vue-player v-bind:jsGameIsStarted="jsGameIsStarted" v-on:toggleGame="toggleGame($event)"></vue-player>
        </div>
        <div class="c-dopelist">
            <vue-dopelist v-if="jsGameIsStarted"></vue-dopelist>
            <span v-else>Create a new game!</span>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase';

import player from './player';
import dopeList from './dopeList';

export default {
    components: {
        'vue-player': player,
        'vue-dopelist': dopeList,
    }, // end components

    created() {
    }, // end created

    data() {
        return {
            jsGameIsStarted: false,
        };
    }, // end data

    methods: {

        getPlayerData: function() {
            // Get a database reference to our posts
            let fb = firebase.database();

            // Init player data
            let fbPlayer = fb.ref('player');

            // Attach an asynchronous callback to read the data at our posts reference
            fbPlayer.once('value', function(snapshot) {
                // console.log(snapshot.val());
                let newPlayer = snapshot.val();
                // console.log(newPlayer);
                // return snapshot.val();
                return newPlayer;

            }, function (errorObject) {
                console.log('The read failed: ' + errorObject.code);
            });

        },

        toggleGame: function(state) {
            this.jsGameIsStarted = state;
            // console.log(jsGameIsStarted);
            this.initGame();
        },

        initGame: function() {
            // Get a database reference to our posts
            var fb = firebase.database();

            // Get the gamesPlayed list
            var fbRuns = fb.ref('doperuns');

            // Create the default values for this game
            // Add a new game (created a new line in the doperuns "folder" of fb)
            let newRun = fbRuns.push();

            // Init player data
            let fbPlayer = fb.ref('player');
            // Attach an asynchronous callback to read the data at our posts reference
            fbPlayer.once('value', function(snapshot) {
                let newPlayer = snapshot.val();

                newRun.update({
                    player: {
                        health: newPlayer[0].health,
                        armour: newPlayer[0].armour,
                        cash: newPlayer[0].cash,
                        loan: newPlayer[0].loan,
                        inventory: newPlayer[0].inventory,
                        pockets: newPlayer[0].pockets,
                        gun: newPlayer[0].gun,
                    }
                });

            }, function (errorObject) {
                console.log('The read failed: ' + errorObject.code);
            });

            // Init game data
            let fbGame = fb.ref('game');
            fbGame.once('value', function(snapshot) {
                let newGame = snapshot.val();

                newRun.update({
                    game: {
                        day: 1,
                        length: newGame[0].length,
                        mode: newGame[0].mode,
                        difficulty: newGame[0].difficulty,
                    }
                });

            }, function (errorObject) {
                console.log('The read failed: ' + errorObject.code);
            });

            // Init Dope data
            let fbDope = fb.ref('dope');
            fbDope.once('value', function(snapshot) {
                let newDope = snapshot.val();

                for (var i in newDope) {
                    if (newDope.hasOwnProperty(i)) {
                        //console.log(newDope[i].name);

                        let dopeName = newDope[i].name;
                        // console.log(dopeName);

                         var postData = {
                            name: newDope[i].name,
                            amount: 0,
                            price: 0,
                          };

                        let updates = {};
                        updates['/dope/' + dopeName] = postData;
                        // TODO save the prices and amount for each day.

                        newRun.update(updates);

                        // newRun.update({
                        //     dope: {
                        //         [dopeName]: {
                        //             name: [dopeName],
                        //             amount: 0,
                        //             price: 0,
                        //         }
                        //     }
                        // });
                        // do stuff
                    }
                }

            }, function (errorObject) {
                console.log('The read failed: ' + errorObject.code);
            });
        },

    },  // end methods

};  // end export default
</script>
