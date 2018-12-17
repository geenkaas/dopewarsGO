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
  components: {
    'vue-dopelist': Dopelist,
    'vue-player': Player,
  }, // end components
};
</script>


<style lang="scss">
</style>
