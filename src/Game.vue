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

import firebase from 'firebase';

import dopeList from './dopeList';
import player from './player';

export default {
  components: {
    'vue-dopelist': dopeList,
    'vue-player': player,
  }, // end components
  created() {
    this.initGame();
  }, // end created

  methods: {
    initGame() {
      var rootRef = firebase.database().ref();
      var storesRef = rootRef.child('doperuns');
      var newStoreRef = storesRef.push();
      newStoreRef.set({
        name: "Cars",
        "pageId": "23"
      });
    }
  },
};
</script>


<style lang="scss">
</style>
