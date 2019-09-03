import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue' /*登录 lz*/
import change from './views/changepassword.vue' /*重置密码 lz*/
import info from './views/info.vue' /*用户信息 lz*/
import setusername from './views/setusername.vue'
import add from './views/address.vue'
import addsss from './views/add.vue'
import addss from './views/addDetail.vue'
import adds from './views/adds.vue'

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
import Service from './views/service_cont.vue'
import serviceD from './views/service_details.vue'
import service1 from './views/service1.vue'
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
      path: '/change',
      name: 'change',
      component: change,
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
          props: route => ({
            name: route.query.geohash
          }),
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
          component: user,
          children: [
            {
              path: '/',
              name: 'users',
              component: Users
            },
            {
              path: 'info',
              component: info,
            },
            {
              path:'setusername',
              name:'setusername',
              component:setusername
            },
            {
              path:'add',
              component:add
            },
            {
              path:'adds',
              name:'adds',
              component:adds,
              children:[
                {
                  path:'/',
                  component:addsss
                },
                {
                  path:'addss',
                  component:addss
                }
              ]
            },
            
          ]
        }
      ]
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
    }, {
      path: '/service',
      name: 'service',
      component: Service,
      children: [
        {
          path: '/',
          name: 'service',
          component: service1
        },
        {
          path: 'Details',
          name: 'details',
          component: serviceD
        }
      ]
    }
  ]
})
