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
      const fb = firebase.database().ref();

      // get dopelist
      const fbDope = fb.child('dope');
      // get player
      const fbPlayer = fb.child('player');
      // get game
      const fbGame = fb.child('game');
      console.log(fbGame[0]);

      // Get doperuns from FB and add one new record.
      const fbRuns = fb.child('doperuns');
      let newRun = fbRuns.push();
      newRun.set({
        length: fbGame[0].length,
        difficulty: fbGame.difficulty,
        mode: fbGame.mode,
        health: fbPlayer.health,
        armour: fbPlayer.armour,
        cash: fbPlayer.cash,
        loan: fbPlayer.loan,
        inventory: fbPlayer.inventory,
        pockets: fbPlayer.pockets,
        gun: fbPlayer.gun,
        day: 1,
      });
    }
  },
};
</script>
