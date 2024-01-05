import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/vue-extend'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 轮播组件
Vue.use(VueAwesomeSwiper) /* { default global options } */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
