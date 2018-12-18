<template>
  <div class="c-dopelist__wrapper">
    <div v-for="(dope, i) in dopelist" :key='i' class="c-dopelist__row s-flex s-flex--equal">
      <span class="c-dopelist__cell c-dopelist__name">
        {{ dope.name }}
      </span>
      <span class="c-dopelist__cell c-dopelist__amount">
        {{ dope.amount }}
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

import game from './game';

export default {
  data() {
    return {
      dopelist: [
        {
          name: 'test1',
          min: 1000,
          max: 2500,
          current: 0,
          amount: 0,
        },
        {
          name: 'test2',
          min: 200,
          max: 500,
          current: 0,
          amount: 0,
        },
        {
          name: 'test3',
          min: 12,
          max: 600,
          current: 0,
          amount: 0,
        },
        {
          name: 'test4',
          min: 1000,
          max: 2500,
          current: 0,
          amount: 0,
        },
        {
          name: 'test5',
          min: 200,
          max: 500,
          current: 0,
          amount: 0,
        },
        {
          name: 'test6',
          min: 12,
          max: 600,
          current: 0,
          amount: 0,
        },
        {
          name: 'test7',
          min: 1000,
          max: 2500,
          current: 0,
          amount: 0,
        },
        {
          name: 'test8',
          min: 200,
          max: 500,
          current: 0,
          amount: 0,
        },
        {
          name: 'test9',
          min: 12,
          max: 600,
          current: 0,
          amount: 0,
        },
        {
          name: 'test10',
          min: 1000,
          max: 2500,
          current: 0,
          amount: 0,
        },
        {
          name: 'test11',
          min: 100,
          max: 110,
          current: 0,
          amount: 0,
        },
      ],
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
    // fetch the data when the view is created and the data is
    // already being observed
    let that = this;
    this.dopelist.forEach(function(value, dope) {

      // const priceMax = that.dopelist[dope].max;
      // const priceMin = that.dopelist[dope].min;
      // const priceBandwidth = priceMax - priceMin;
      // let priceRandy = Math.random();
      // let priceCurrent =  Math.ceil(priceBandwidth * priceRandy) + priceMin;
      // that.dopelist[dope].current = priceCurrent;
      that.randomPrice(dope);

    });
  }, // end created

  methods: {
    add(dope, inc) {

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
      const priceMax = this.dopelist[dope].max;
      const priceMin = this.dopelist[dope].min;
      const priceBandwidth = priceMax - priceMin;
      let priceRandy = Math.random();
      let priceCurrent =  Math.ceil(priceBandwidth * priceRandy) + priceMin;
      this.dopelist[dope].current = priceCurrent;
      //return Math.ceil(priceBandwidth * priceRandy) + priceMin;
    }, // end method randomPrice

  }, // end methods

  computed: {
  }, // end computed

  mixins: {
  }, // end mixins

};
</script>
