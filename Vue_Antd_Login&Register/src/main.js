import Vue from 'vue'
// import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/less/reset.less'
import 'assets/less/common.less'
import './antdComponents'
import VueI18n from 'vue-i18n'
import './directives'
import { messages } from './lang/index';
// import 'ant-design-vue/dist/antd.css';
// import './rule'
Vue.use(VueI18n)
Vue.config.productionTip = false
const i18n = new VueI18n({
  local: 'zh_CN', // 设置语言 
  fallbackLocale: 'zh_CN',
  messages // 语言包
})
console.log("languages", messages)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
