<template>
  <div id="app" class="c-gamewrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import Game from './Game';

export default {
  name: 'App',
  components: {
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
