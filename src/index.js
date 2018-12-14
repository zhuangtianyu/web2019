import Vue from 'vue'
import App from './App'
import router from './router'

import './util/rem'
import './style/reset'
import './style/media'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
