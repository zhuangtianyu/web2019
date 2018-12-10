import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from 'src/page/Intro/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    }
  ]
})

export default router
