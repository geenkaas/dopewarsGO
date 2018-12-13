<template>
  <div id="app">
    <vue-dopelist v-bind:title="title" v-bind:player="player" v-bind:game="game"></vue-dopelist>
  </div>
</template>

<script>

import Dopelist from './Dopelist';

export default {
  components: {
    'vue-dopelist': Dopelist,
  },
  name: 'App',
  data() {
    return {
      title: 'Test GO',
      player: [
        {
          name: 'wetnose',
          health: 100,
          cash: 2000,
          inventory: 0,
          pockets: 50,
        },
      ],
      game: [
        {
          id: 1,
          length: 7,
          day: 1,
          inventory: {},
        },
      ],
    };
  },
};
</script>


<style lang="scss">
  @import "scss/style.scss";
</style>
