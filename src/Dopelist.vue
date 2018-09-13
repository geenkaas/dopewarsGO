<template>
  <div>
    <div v-for="(dope, i) in dopelist" :key='i' class="c-dopelist s-flex s-flex--equal">
      <span class="s-flex__item">{{ dope.name }}</span>
      <span class="s-flex__item">{{ dope.amount }}</span>
      <span class="s-flex__item"><button v-on:click="subtract(i, 1)">-</button></span>
      <span class="s-flex__item">{{ randomPrice(i) }}</span>
      <span class="s-flex__item"><button v-on:click="add(i, 1)">+</button></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dopelist: [
        {
          name: 'Peyote',
          min: 1000,
          max: 2500,
          amount: 0,
        },
        {
          name: 'Speed',
          min: 200,
          max: 500,
          amount: 0,
        },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line
    add(dope, inc) {
      // this.dopelist[dope].amount += inc;
    },
    // eslint-disable-next-line
    subtract(dope, dec) {
      if (this.dopelist[dope].amount > 0) {
        // this.dopelist[dope].amount -= dec;
      }
    },
    /* updates EVERY time... */
    randomPrice(dope) {
      const priceMax = this.dopelist[dope].max;
      const priceMin = this.dopelist[dope].min;
      const priceBandwidth = priceMax - priceMin;
      const priceRandy = Math.random();
      return Math.ceil(priceBandwidth * priceRandy) + priceMin;
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>

.c-dopelist {
  max-width: 375px;
  margin: 0 auto;
  align-items: center;
}

.s-flex__item {
  border: 1px solid red;

}

</style>
