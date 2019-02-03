import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueTabs from 'vue-nav-tabs'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-nav-tabs/themes/vue-tabs.css'

Vue.use(VueTabs);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
