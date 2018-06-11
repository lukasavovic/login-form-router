import Vue from 'vue'
import App from './App.vue'
//axios
import axios from 'axios'

Vue.prototype.axios = axios

// bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
Vue.config.productionTip = false

window.Vue = Vue;
window.VueRouter = VueRouter;
import VueRouter from 'vue-router';
import router from '../routes';
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
