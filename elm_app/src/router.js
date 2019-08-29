import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import head from './components/head.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'head',
      component: head,
      props: route => ({ name: route.query.data })
    },
  ]
})
