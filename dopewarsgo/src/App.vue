<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <dopelist></dopelist>
  </div>
</template>

<script>

import Dopelist from './Dopelist';

export default {
  components: {
    dopelist: Dopelist,
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
      dopelist: [
        {
          name: 'Peyote',
          min: 1000,
          max: 2500,
          amount: 0,
        },
        {
          name: 'Speed',
          min: 200,
          max: 500,
          amount: 0,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
