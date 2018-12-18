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
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD3KptP-Zcb7wDW_f1QjXfd5vzKyPhiovs",
    authDomain: "dopewars-go.firebaseapp.com",
    databaseURL: "https://dopewars-go.firebaseio.com",
    projectId: "dopewars-go",
    storageBucket: "dopewars-go.appspot.com",
    messagingSenderId: "532369668543"
};

firebase.initializeApp(config);
Vue.prototype.$firebase = firebase;

// Filters
Vue.filter('to-uppercase', function(value) {
    return value.toUpperCase();
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router,
});
