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
//导入vee-validate
import VeeValidate, { Validator } from 'vee-validate';
//使用 vee-validate
Vue.use(VeeValidate,{
  events:''
});
//导入语言包
import zh_CN from 'vee-validate/dist/locale/zh_CN.js';
//使用语言包
Validator.localize('zh_CN', zh_CN);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
