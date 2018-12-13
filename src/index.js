import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './util/rem.js'
import './style/reset.css'
import './style/media.css'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
