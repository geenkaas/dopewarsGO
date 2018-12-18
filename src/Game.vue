<template>
  <div class="c-gamecontent">
    <div class="c-login">
      <vue-login></vue-login>
    </div>
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
import login from './login';

export default {
  components: {
    'vue-dopelist': dopeList,
    'vue-player': player,
    'vue-login': login,
  }, // end components
};
</script>


<style lang="scss">
</style>
