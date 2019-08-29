import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
import vueResource from 'vue-resource'
// import vueAxios from 'vue-axios'
// import axios from 'axios'
// Vue.use(vueAxios, axios)
Vue.use(vueResource)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
