import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
// import VueAxios from 'vue-axios'
import './assets/lz.iconfont/iconfont.css'
import axios from 'axios'
import '../node_modules/swiper/dist/css/swiper.min.css'
import elementUi from 'element-ui'
import '../node_modules/element-ui/lib/index'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import vueResource from 'vue-resource'
// Vue.use(VueAxios, axios)
Vue.use(vueResource)
Vue.use(elementUi)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
