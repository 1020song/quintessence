import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue' /*登录 lz*/
import change from './views/changepassword.vue' /*重置密码 lz*/
import info from './views/info.vue' /*用户信息 lz */
import Index from './views/Index.vue'
import About from './views/About.vue'
import City from './views/City.vue'
import Takeaway from './components/Takeaway'
import search from './components/search'
import Order from './components/Order'
import user from './components/user'
<<<<<<< HEAD
// 优惠
import Benefit from './views/benefit.vue'
import benefits from './views/benefits.vue'
import Retails from './views/reddetails.vue'
import Coupon from './views/coupon.vue'
// 金额
import Balance from './views/balance.vue'
import Balance1 from './views/balance1.vue'// 金额数量
import Explain from './views/explain.vue'// 金额说明

// 积分
import integral from './views/score.vue'
import integral1 from './views/score1.vue'
import integralDetails from './views/score_details.vue'
// 积分商城
import jf_Shopping from './views/jf_shopping.vue'
// Vip
import Vip from './views/vip.vue'
import vip1 from './views/vip1.vue'
import vipDescription from './views/vipDescription.vue'
import payment from './views/payment.vue'
import useCart from './views/useCart.vue'
import invoiceRecord from './views/invoiceRecord'
// 服务中心
=======

import foodDetail from './views/foodDetail.vue'
import Users from './views/user.vue'
import Balance from './views/balance.vue'
import Balance1 from './views/balance1.vue'
import Explain from './views/explain.vue'
>>>>>>> 59c572b4fc3c6a9c8fae0e8306ff46e9a8fc7741
import Service from './views/service_cont.vue'
import serviceD from './views/service_details.vue'
import service1 from './views/service1.vue'
import sweetmeats from './views/sweetmeats.vue'

import searchtodetail from './components/searchToDetail.vue' /*搜索的时候，点击li，进入详情页*/

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
      path: '/shopping',
      name: 'shopping',
      component: jf_Shopping
    },
    {
      path: '/benefit',
      component: Benefit,
      children: [
        {
          path: '/',
          name: 'benefit',
          component: benefits
        },
        {
          path: 'hbDescription',
          name: 'red',
          component: Retails
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: Coupon
        }
      ]
    },
=======
      // 商品详情
      path: '/foodDetail',
      name: 'foodDetail',
      component: foodDetail
    },
    // 登录
>>>>>>> 59c572b4fc3c6a9c8fae0e8306ff46e9a8fc7741
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
          component: Takeaway,
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
          component: search,
          props: route => ({
            name: route.query
          }),
          children: [
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
<<<<<<< HEAD
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip,
      children: [
        {
          path: '/',
          name: 'vip1',
          component: vip1
        },
        {
          path: 'vipDescription',
          name: 'vipDescription',
          component: vipDescription
        },
        {
          path: 'payment',
          name: 'payment',
          component: payment
        },
        {
          path: 'useCart',
          name: 'useCart',
          component: useCart
        },
        {
          path: 'invoiceRecord',
          name: 'invoiceRecord',
          component: invoiceRecord
        }
      ]
    },
    {
      path: '/app',
      name: 'app',
      component: App
=======
>>>>>>> 59c572b4fc3c6a9c8fae0e8306ff46e9a8fc7741
    }
  ]
})
