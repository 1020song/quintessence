import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import About from './views/About.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
      // props: route => ({ name: route.query.data })
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // props: route => ({ name: route.query.data })
    },
  ]
})
