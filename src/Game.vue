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

import dopeList from './dopeList';
import player from './player';

export default {
  components: {
    'vue-dopelist': dopeList,
    'vue-player': player,
  }, // end components
};
</script>


<style lang="scss">
</style>
