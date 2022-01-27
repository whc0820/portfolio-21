import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.prototype.$screen = Vue.observable({
  width: window.innerWidth,
  height: window.innerHeight
});
window.addEventListener('resize', () => {
  Vue.prototype.$screen.width = window.innerWidth;
  Vue.prototype.$screen.height = window.innerHeight;
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
