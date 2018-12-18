<template>
    <div>
        <p>dd2: {{ player[0].name }}</p>
        <p>dd3: {{ player[0].cash }}</p>
        <p>dd4: {{ player[0].health }}</p>
        <get-demo></get-demo>
        <button v-on:click="firebase">upload to firebase</button>
    </div>
</template>

<script>

import { bus } from './main';

import getDemo from './getDemo'

export default {
    components: {
        'get-demo': getDemo,
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
            ]
        };
    }, // end data

    // https://www.youtube.com/watch?v=9qqFH60isFc&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=23
    props: {
        title: {
            Type: String
        },
    }, // end props

    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        let that = this;

        bus.$on('buy', (data) => {
            this.player[0].cash -= data;
        })
    }, // end created

    methods: {
    }, // end methods

    computed: {
    }, // end computed

};
</script>
