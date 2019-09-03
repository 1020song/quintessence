import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue' /*登录 lz*/
import change from './views/changepassword.vue' /*重置密码 lz*/
import info from './views/info.vue' /*用户信息 lz*/
import Index from './views/Index.vue'
import About from './views/About.vue'
import City from './views/City.vue'
import Users from './views/user.vue'
import Takeaway from './components/Takeaway'
import search from './components/search'
import Order from './components/Order'
import user from './components/user'
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
// 服务中心
import Service from './views/service_cont.vue'
import serviceD from './views/service_details.vue'
import service1 from './views/service1.vue'
// app
import App from './views/appdetails.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
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
              component: info
            }
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
    },
    {
      path: '/integral',
      name: 'integral',
      component: integral,
      children: [
        {
          path: '/',
          name: 'integral1',
          component: integral1
        },
        {
          path: 'details',
          name: 'details1',
          component: integralDetails
        }
      ]
    },
    {
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
          name:'vipDescription',
          component: vipDescription
        },
        {
          path: 'payment',
          name: 'payment',
          component: payment
        }
      ]
    },
    {
      path: '/app',
      name: 'app',
      component: App
    }
  ]
})
