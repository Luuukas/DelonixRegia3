import Vue from 'vue'
import './plugins/axios'
import router from './router'
import App from './App.vue'
import './plugins/element.js'
import axios from 'axios'
import store from './store'    //ÒýÈëstore

Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
