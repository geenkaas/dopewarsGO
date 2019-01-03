import Vue from 'vue';
import App from './App.vue';
import Firebase from 'firebase';
import vueResource from 'vue-resource';
import vueRouter from 'vue-router';
import { store } from './store/store';
import { routes } from './routes/routes';

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

Vue.use(vueResource);
Vue.use(vueRouter);
const router = new vueRouter({
    routes: routes,
    mode: 'history',
});

// Disable VUE config
Vue.config.devtools = false;
Vue.config.productionTip = false;

// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in

// READ: https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
router.beforeEach((to, from, next) => {

  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/register');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }

});

// Wrap the vue instance in a Firebase onAuthStateChanged method
// This stops the execution of the navigation guard 'beforeEach'
// method until the Firebase initialization ends
Firebase.auth().onAuthStateChanged(function(user) {

  new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
  });

});
