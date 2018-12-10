import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from 'src/page/Start/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    }
  ]
})

export default router
