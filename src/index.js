import Vue from 'vue'
import App from './App'
import router from './router'

import './util/rem'
import './style/reset'
import './style/media'

import modal from './util/modal'
import loading from './util/loading'

Vue.prototype.$modal = modal
Vue.prototype.$loading = loading

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
