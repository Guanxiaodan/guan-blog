import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
// import axios from 'axios';
import axios from './assets/axiosInterceptor.js'


Vue.config.productionTip = false
// Vue.use(VueRouter)
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
