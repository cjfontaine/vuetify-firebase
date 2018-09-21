// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyD6UmvLZcElbe0of2L52LShoGpqpOWpY5s',
  authDomain: 'awesome-3ffcc.firebaseapp.com',
  databaseURL: 'https://awesome-3ffcc.firebaseio.com',
  projectId: 'awesome-3ffcc',
  storageBucket: 'awesome-3ffcc.appspot.com',
  messagingSenderId: '583124458916'
})

/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})
