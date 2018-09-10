<template>
  <div>
  <div v-for="(dope, i) in dopelist" :key='i'>
    {{ dope.name }}
    {{ dope.amount }}
    <button v-on:click="subtract(i, 1)">-</button>
    <span>{{ randomPrice(i) }}</span>
    <button v-on:click="add(i, 1)">+</button>
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
    add(dope, inc) {
      this.dopelist[dope].amount += inc;
    },
    subtract(dope, dec) {
      if (this.dopelist[dope].amount > 0) {
        this.dopelist[dope].amount -= dec;
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

</style>
