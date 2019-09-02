import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// iconfont图标
import './assets/iconfont/iconfont.css'
// import VueAxios from 'vue-axios'
import './assets/lz.iconfont/iconfont.css'
import './assets/user_iconfont/iconfont.css'
// Vue.use(VueAxios, axios)
import '../node_modules/swiper/dist/css/swiper.min.css'
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
