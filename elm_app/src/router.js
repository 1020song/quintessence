import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import change from './views/changepassword.vue'
import Index from './views/Index.vue'
import About from './views/About.vue'
import City from './views/City.vue'
import Takeaway from './components/Takeaway'
import search from './components/search'
import Order from './components/Order'
import user from './components/user'

import Users from './views/user.vue'
import Balance from './views/balance.vue'
import Balance1 from './views/balance1.vue'
import Explain from './views/explain.vue'
// import Service from './views/service.vue'
// import Integral from './views/user.vue'
// import Vip from './views/user.vue'
// import App from './views/user.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/change',
      name:'change',
      component:change,
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/city/:id',
      name: 'city',
      component: City
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
          path: 'search',
          name: 'search',
          component: search
        },
        {
          path: 'Order',
          name: 'Order',
          component: Order
        },
        {
          path: 'user',
          name: 'user',
          component: user
        }
      ]
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/balance',
      name: 'balance',
      component: Balance,
      children: [
        {
          path: '/',
          name: 'explain',
          component: Balance1
        },
        {
          path: 'explain',
          name: 'explain',
          component: Explain
        }
      ]
    }
  ]
})
