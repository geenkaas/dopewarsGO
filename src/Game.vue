<template>
  <div class="c-gamecontent">
    <div class="c-player">
      <vue-player></vue-player>
    </div>
    <div class="c-dopelist">
      <vue-dopelist></vue-dopelist>
    </div>
  </div>
</template>

<script>

import Dopelist from './Dopelist';
import Player from './Player';

export default {
  name: 'App',
  components: {
    'vue-dopelist': Dopelist,
    'vue-player': Player,
  }, // end components
  data() {
    return {
      title: 'Test GO',
      game: [
        {
          id: 1,
          length: 7,
          day: 1,
          inventory: {},
        },
      ],
    };
  }, // end data
};
</script>


<style lang="scss">
  @import "scss/style.scss";
</style>
