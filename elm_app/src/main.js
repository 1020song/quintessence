import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
// import VueResource from 'Vue-resource'
// import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(axios)
// Vue.use(VueResource)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
