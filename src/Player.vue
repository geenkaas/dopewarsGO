<template>
    <div>
        <p>dd2: {{ player[0].name }}</p>
        <p>dd3: {{ player[0].cash }}</p>
        <p>dd4: {{ player[0].health }}</p>

        <button v-on:click="fbsend">upload to firebase</button>

        <p>{{ auth }}</p>
    </div>
</template>

<script>

import firebase from 'firebase';
import { bus } from './main';

export default {
    components: {
    }, // end components

    data() {
        return {
            player: [
                {
                    name: 'Goofy',
                    health: 100,
                    armour: 0,
                    cash: 2000,
                    loan: 0,
                    inventory: 0,
                    pockets: 50,
                    gun: 0,
                },
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
            auth: firebase.auth().currentUser.email,
        };
    }, // end data

    props: {
        title: {
            Type: String
        },
    }, // end props

    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        let that = this;

        const ref = firebase.database().ref('dope');
        ref.once('value').then((snapshot) => {
            console.log(snapshot.val());
            //this.dope = snapshot.val();
        })
    }, // end created

    methods: {
        fbsend: function() {
            console.log('post!');
            // https://www.youtube.com/watch?v=CzJyGo5rh7M&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=45&t=0s
            // this.$http.post('https://dopewars-go.firebaseio.com/dope.json', this.dope).then(function(data) {
            //     console.log(data);
            // });
            const ref = firebase.database().ref('dope');
            ref.set(this.dope);


            // const ref = firebase.database().ref('dope2').push();
            // const key = ref.key;
            // ref.set({
            //     key,
            //     test: false
            // })

        }
    }, // end methods

    computed: {
    }, // end computed

};
</script>
