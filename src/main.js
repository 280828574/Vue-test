import Vue from 'vue';
import '@/assets/styles';
import App from './App.vue';
import api from './api';
import constant from '@/constant';
import scripts from '@/scripts';
import router from '@/router';
import store from '@/store';
import VueParticles from 'vue-particles';
import vueTouch from 'kim-vue-touch';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;

Vue.prototype.$api = api;
Vue.prototype.$const = constant;
Vue.prototype.$scripts = scripts;

Vue.use(VueParticles);
Vue.use(vueTouch);
Vue.use(ElementUI);

const Bus = new Vue();
// Waypoint plugin
new Vue({
    router,
    store,
    render: h => h(App),
    data: {
        Bus
    }
}).$mount('#app');

