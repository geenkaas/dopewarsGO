<template>
  <div id="app" class="c-gamewrapper">
    <router-view></router-view>
  </div>
</template>

<script>import game from './game';

export default {
  name: 'App',
  components: {
  }, // end components
  data() {
    return {
      title: 'Test GO',
    };
  }, // end data

  methods: {
    setUser: function() {
      this.$store.dispatch('setUser');
    }
  }, // end methods

  created() {
    // when the app is created run the set user method
    // this uses Vuex to check if a user is signed in
    // check out mutations in the store.js file
    this.setUser();
  }, // end created
};
</script>

<style lang="scss">
  @import "scss/style.scss";
</style>
