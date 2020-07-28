import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SiteTopbar from './components/SiteTopbar/index';
import SiteHeader from './components/SiteHeader/index'
import axios from 'axios';
Vue.config.productionTip = false
Vue.prototype.$axios = axios
import elementUi from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(elementUi)
Vue.component('SiteHeader',SiteHeader)
Vue.component('SiteTopbar',SiteTopbar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
