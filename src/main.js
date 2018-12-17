// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import vueResource from 'vue-resource';
Vue.use(vueResource);

import vueRouter from 'vue-router';
Vue.use(vueRouter);
import Routes from './routes/routes';

const router = new vueRouter({
    routes: Routes,
    mode: 'history',
});

// Disable VUE config
Vue.config.devtools = false;


// READ FB: https://stackoverflow.com/questions/44352042/vuejs-vuex-firebase-where-to-hook-up-firebase
// import vuefire from 'vuefire';
// Vue.use(VueFire);

// Filters
Vue.filter('to-uppercase', function(value) {
    return value.toUpperCase();
})

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router,
});
