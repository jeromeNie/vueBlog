// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
import VueResource from 'vue-resource'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)

let app = '';

const firebaseConfig = {
  apiKey: "AIzaSyA5HmcMLpE7B9-Rl63fNSCg1es3yEEBdXs",
  authDomain: "vueblog-734b2.firebaseapp.com",
  databaseURL: "https://vueblog-734b2.firebaseio.com",
  projectId: "vueblog-734b2",
  storageBucket: "vueblog-734b2.appspot.com",
  messagingSenderId: "702467582047",
  appId: "1:702467582047:web:b8b7c125fbf73508"
};

firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    })
  }
})

