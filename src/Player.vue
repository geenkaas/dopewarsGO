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
                    name: 'acid',
                    minPrice: 1000,
                    maxPrice: 4400,
                }
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
            this.dope = snapshot.val();
        })
    }, // end created

    methods: {
        fbsend: function() {
            console.log('post!');
            // https://www.youtube.com/watch?v=CzJyGo5rh7M&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=45&t=0s
            // this.$http.post('https://dopewars-go.firebaseio.com/dope.json', this.dope).then(function(data) {
            //     console.log(data);
            // });
            const ref = firebase.database().ref('dope2').push();
            const key = ref.key;
            ref.set({
                key,
                test: false
            })

        }
    }, // end methods

    computed: {
    }, // end computed

};
</script>
