<template>
    <div>
        <h3>VUE DEMO</h3>
        <p>dd2: {{ player[0].health }}</p>
        <p>dd3: {{ player[0].cash }}</p>

        <button v-on:click="fbSend" disabled>upload to firebase</button>

        <button v-on:click="endGame" v-if="jsGameIsStarted">End game</button>
        <button v-on:click="createGame" v-else>Create a new game</button>
    </div>
</template>

<script>

import firebase from 'firebase';

import { bus } from './main';
const keyBy = require('lodash/keyBy');

export default {
    components: {
    }, // end components

    data() {
        return {
            game: [
                {
                    length: 7,
                    difficulty: 1,
                    mode: 'singleplayer',
                },
            ],
            player: [
                {
                    health: 100,
                    armour: 0,
                    cash: 2000,
                    loan: 0,
                    inventory: 0,
                    pockets: 50,
                    gun: 0,
                },
            ],
            doperun: [
                {
                    mode: [
                        {
                            day: 1,
                            length: 7,
                        }
                    ],
                    player: [
                        {
                            health: 0,
                            armour: 0,
                            cash: 0,
                            loan: 0,
                            inventory: 0,
                            pockets: 0,
                            gun: 0,
                        }
                    ],
                    dope: [
                        {
                            name: '',
                            price: 0,
                            amount: 0,
                        }
                    ],
                }
            ],
            dope: [
                {
                    name: 'Acid',
                    minPrice: 1000,
                    maxPrice: 4400,
                },
                {
                    name: 'Cocaine',
                    minPrice: 15000,
                    maxPrice: 2900,
                },
                {
                    name: 'Hashish',
                    minPrice: 480,
                    maxPrice: 1280,
                },
                {
                    name: 'Heroin',
                    minPrice: 5500,
                    maxPrice: 1300,
                },
                {
                    name: 'Ludes',
                    minPrice: 11,
                    maxPrice: 60,
                },
                {
                    name: 'MDA',
                    minPrice: 1500,
                    maxPrice: 4400,
                },
                {
                    name: 'Opium',
                    minPrice: 540,
                    maxPrice: 1250,
                },
                {
                    name: 'PCP',
                    minPrice: 1000,
                    maxPrice: 2500,
                },
                {
                    name: 'Peyote',
                    minPrice: 220,
                    maxPrice: 700,
                },
                {
                    name: 'Shrooms',
                    minPrice: 630,
                    maxPrice: 1300,
                },
                {
                    name: 'Speed',
                    minPrice: 90,
                    maxPrice: 250,
                },
                {
                    name: 'Weed',
                    minPrice: 315,
                    maxPrice: 890,
                },
            ],
            //auth: firebase.auth().currentUser.email,
        };
    }, // end data

    props: {
        title: {
            Type: String
        },
        jsGameIsStarted: {
            Type: Boolean
        },
    }, // end props

    created() {
        this.loadStats();
    }, // end created

    methods: {

        loadStats: function() {

            // Get a database reference to our posts
            let fb = firebase.database();

            // Get the gamesPlayed list
            let fbRuns = fb.ref('doperuns');

            // Attach an asynchronous callback to read the data at our posts reference
            fbRuns.once('value', function(snapshot) {
                let currentGame = snapshot.val();

            }, function (errorObject) {
                console.log('The read failed: ' + errorObject.code);
            });

        },

        fbSend() {
            // console.log('post!');
            // const dope = firebase.database().ref('dope');
            //dope.set(this.dope);

            // update plus name as key
            // const ref = firebase.database().ref('dope');
            // const dope = keyBy(this.dope, (i) => i.name);
            // ref.update(dope);


            // const ref = firebase.database().ref('dope');
            // const dope = keyBy(this.dope, (i) => i.name);

            // ref.update(dope);


            // const ref = firebase.database().ref('dope2').push();
            // const key = ref.key;
            // ref.set({
            //     key,
            //     test: false
            // })
        },

        createGame: function() {
            this.$emit('toggleGame', true);
        },

        endGame: function() {
            this.$emit('toggleGame', false);
        },

    }, // end methods

    computed: {
    }, // end computed

};
</script>
