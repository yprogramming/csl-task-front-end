import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from '@/router'
import store from '@/store.js'

import { setupComponents } from '@/config/setup-components';
setupComponents(Vue);

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    iconfont: 'mdi',
    render: h => h(App)
}).$mount('#app')