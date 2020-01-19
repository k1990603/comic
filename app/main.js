import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';
Vue.prototype.$serverUrl = 'http://192.168.1.119:4000';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()