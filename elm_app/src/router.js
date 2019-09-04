import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue' /*登录 lz*/
import change from './views/changepassword.vue' /*重置密码 lz*/
import info from './views/info.vue' /*用户信息 lz*/
import setusername from './views/setusername.vue'
import add from './views/add.vue'
import addsss from './views/addsss.vue'
import addss from './views/addss.vue'
import adds from './views/adds.vue'

import Index from './views/Index.vue'
import About from './views/About.vue'
import City from './views/City.vue'
import Takeaway from './components/Takeaway'
import search from './components/search'
import Order from './components/Order'
import user from './components/user'

import foodDetail from './views/foodDetail.vue'
import Users from './views/user.vue'
import Balance from './views/balance.vue'
import Balance1 from './views/balance1.vue'
import Explain from './views/explain.vue'
import Service from './views/service_cont.vue'
import serviceD from './views/service_details.vue'
import service1 from './views/service1.vue'
import sweetmeats from './views/sweetmeats.vue'

import searchtodetail from './components/searchToDetail.vue' /*搜索的时候，点击li，进入详情页*/
import searchaa from './views/searchaa.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // 商品详情
      path: '/foodDetail',
      name: 'foodDetail',
      component: foodDetail
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 重置密码
    {
      path: '/change',
      name: 'change',
      component: change
    },
    // 首页
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // 城市列表
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
        // 外卖
        {
          path: 'Takeaway',
          props: route => ({
            name: route.query.geohash
          }),
          name: 'Takeaway',
          component: Takeaway
        },
        {
          path: 'sweetmeats',
          name: 'sweetmeats',
          component: sweetmeats
        },
        // 搜索
        {
          path: 'search',
          name: 'search',
          component: searchaa,
          children: [
            {
              path: '/',
              name: 'search',
              component: search,
              props: route => ({
                name: route.query
              }),
            },
            // 点击每一个li，进入食物详情
            {
              path: 'searchdetail',
              name: 'searchdetail',
              component: searchtodetail
            }
          ]
        },
        // 订单
        {
          path: 'Order',
          name: 'Order',
          component: Order
        },
        // 我的
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
            // 账户信息
            {
              path: 'info',
              component: info
            },
            {
              path: 'setusername',
              name: 'setusername',
              component: setusername
            },
            {
              path: 'add',
              name:'add',
              component: add
            },
            {
              path: 'adds',
              name: 'adds',
              component: adds,
              children: [
                {
                  path: '/',
                  name: 'adds',
                  component: addsss
                },
                {
                  path: 'addss',
                  component: addss
                }
              ]
            }
          ]
        }
      ]
    },
    // 我的余额
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
        // 余额说明
        {
          path: 'explain',
          name: 'explain',
          component: Explain
        }
      ]
    }, {
      // 服务中心
      path: '/service',
      name: 'service',
      component: Service,
      children: [
        {
          path: '/',
          name: 'service',
          component: service1
        },
        // 热门问题
        {
          path: 'Details',
          name: 'details',
          component: serviceD
        }
      ]
    }
  ]
})
