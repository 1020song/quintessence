import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import About from './views/About.vue'
import City from './views/City.vue'
import Takeaway from './components/Takeaway'
import seach from './components/seach'
import Order from './components/Order'
import mine from './components/mine'
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
      path: '/city/:id',
      name: 'city',
      component: City
      // props: route => ({ name: route.query.data })
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: 'Takeaway',
          name: 'Takeaway',
          component: Takeaway
        },
        {
          path: 'seach',
          name: 'seach',
          component: seach
        },
        {
          path: 'Order',
          name: 'Order',
          component: Order
        },
        {
          path: 'mine',
          name: 'mine',
          component: mine
        }
      ]
    }
  ]
})
