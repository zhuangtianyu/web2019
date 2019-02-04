import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from 'src/page/Intro'
import Article from 'src/page/Article'
import Resume from 'src/page/Resume'
import Recommend from 'src/page/Recommend'
import Write from 'src/page/Write'

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
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/write',
      name: 'write',
      component: Write
    }
  ]
})

export default router
