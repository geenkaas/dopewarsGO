<template>
  <div id="app">
    <c-dopelist/>
  </div>
</template>

<script>

import Dopelist from './Dopelist';

export default {
  components: {
    'c-dopelist': Dopelist,
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
          pockets: 50,
        },
      ],
      game: [
        {
          id: 1,
          length: 7,
          day: 1,
        },
      ],
    };
  },
};
</script>


<style lang="scss">
  @import "scss/style.scss";
</style>
