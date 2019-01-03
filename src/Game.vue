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

      // Get a database reference to our posts
      var fb = firebase.database();
      var fbPlayer = fb.ref('player');

      // Attach an asynchronous callback to read the data at our posts reference
      fbPlayer.on('value', function(snapshot) {
        // console.log(snapshot.val());
        var fbRuns = fb.ref('doperuns');
        var newRun = fbRuns.push();

        var newStats = snapshot.val();

        newRun.set({
          health: newStats[0].health,
          armour: newStats[0].armour,
        });
      }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
      });
    }
  },
};
</script>
