import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';
//使用 vant
Vue.use(Vant);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
