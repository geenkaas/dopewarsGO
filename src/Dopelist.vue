<template>
    <div class="c-dopelist__wrapper" id="dopeList">
        <div v-for="(dope, i) in dopelist" :key='i' class="c-dopelist__row s-flex s-flex--equal">
            <span class="c-dopelist__cell c-dopelist__name">
                <!-- {{ dope.name }} -->
                test
            </span>
            <span class="c-dopelist__cell c-dopelist__amount">
                0
            </span>
            <span class="c-dopelist__cell c-dopelist__subtract">
                <button v-on:click="subtract(i, 1)">-</button>
            </span>
            <span class="c-dopelist__cell c-dopelist__current">
                {{ dope.current }}
            </span>
            <span class="c-dopelist__cell c-dopelist__add">
                <button v-on:click="add(i, 1)">+</button>
            </span>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase';
import game from './game';
const keyBy = require('lodash/keyBy');
const forEach = require('lodash/forEach');

export default {
    data() {
        return {
            dopelist: {},
            dopePrices: [],
        };
    }, // end data

    components: {
        'vue-game': game,
    }, // end components

    // https://www.youtube.com/watch?v=9qqFH60isFc&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=23
    props: {
        title: {
            Type: String
        },
    }, // end props

    created() {
        let that = this;

        // fetch the doplist when the view is created
        const ref = firebase.database().ref('dope');
        ref.once('value').then((snapshot) => {
            // console.log(snapshot.val());
            this.dopelist = snapshot.val().map((item) => {
                //console.log(item);
                return this.randomPrice(item);
            });

            // this.dopelist.forEach(function(value, dope) {

            //   //console.log(value.name);

            //   // const priceMax = that.dopelist[dope].max;
            //   // const priceMin = that.dopelist[dope].min;
            //   // const priceBandwidth = priceMax - priceMin;
            //   // let priceRandy = Math.random();
            //   // let priceCurrent =  Math.ceil(priceBandwidth * priceRandy) + priceMin;
            //   // that.dopelist[dope].current = priceCurrent;

            //   that.randomPrice(value.name, dope);

            // });
        })
    }, // end created

    methods: {
        add(dope, inc) {

                console.log(this.dopelist);

                // console.log('clicked ADD');
                // // post to database: https://www.youtube.com/watch?v=btDfVBPYI-U&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=33
                // this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                //     title: 'mytitle',
                //     body: 'blLBblBLblll alalbalblablabla lblabalball ablb alblbalbalb alblbal ablabal ba lb',
                //     userId: 666,
                // }).then(function(data) {
                //     console.log(data);
                // })

            // Check if player has enough pocket space
            // let playerInventory = Player.player[0].inventory;
            // let playerPockets = this.player[0].pockets;
            // if (playerInventory < playerPockets) {

            //   // Check if player has enough cash
            //   let playerCash = this.player[0].cash;
            //   let dopePrice = this.dopelist[dope].current;
            //   if (this.player[0].cash >= this.dopelist[dope].current) {

            //     // Add one to amount of dope
            //     this.dopelist[dope].amount += inc;
            //     // Add one to inventory
            //     //this.player[0].inventory++;
            //     // Remove cash for the dope
            //     //this.player[0].cash -= this.dopelist[dope].current;

            //     //https://www.youtube.com/watch?v=jzh4zQcfB0o&index=26&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa
            //     bus.$emit('buy', dopePrice);
            //     // TODO replace for FireBase or Axios.

            //   } else {
            //     // Player has no cash left
            //     this.checkButton;
            //   }
            // }
        }, // end method add

        subtract(dope, dec) {
            if (this.dopelist[dope].amount > 0) {
                this.dopelist[dope].amount -= dec;
                this.player[0].inventory--;
            }
        }, // end method subtract

        randomPrice(dope) {
            // TODO: get a random price from location and time (~22 hours shift + cos range)
            const priceMax = dope.maxPrice;
            const priceMin = dope.minPrice;
            const priceBandwidth = priceMax - priceMin;
            let priceRandy = Math.random();
            let priceCurrent =  Math.ceil(priceBandwidth * priceRandy) + priceMin;

            return Object.assign({}, dope, {
                current: priceCurrent
            });
            //console.log(this.dopePrices);
            // this.dopePrices[counter].current = priceCurrent;
            //return priceCurrent;
        }, // end method randomPrice

    }, // end methods

    computed: {
    }, // end computed

    mixins: {
    }, // end mixins

};
</script>
