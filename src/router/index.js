import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from 'src/page/Intro'
import Article from 'src/page/Article'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/article/:articleID',
      name: 'article',
      component: Article
    }
  ]
})

export default router
