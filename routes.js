import VueRouter from 'vue-router';

import login from './src/components/login.vue';
import homepage from './src/components/homepage.vue';

export default new VueRouter({
    routes: [
      { path: '/', component: login },
      { path: '/homepage', component: homepage }
    ]
});