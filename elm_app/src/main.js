import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
<<<<<<< HEAD
import VueAxios from 'vue-axios'
=======
import './assets/lz.iconfont/iconfont.css'
>>>>>>> 16045b46989a6845322a8e936782e5a90a8cb0e0
import axios from 'axios'
Vue.use(VueAxios, axios)
import '../node_modules/swiper/dist/css/swiper.min.css'
// import vueResource from 'vue-resource'
// Vue.use(vueResource)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
