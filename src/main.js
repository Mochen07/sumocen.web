import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18nData } from '@/plugins/vue-extend'

Vue.config.productionTip = false

// mixins
Vue.mixin({
  computed: {
    // 获取当前语言
    $i18n () {
      return i18nData[this.$store.state.global.language]
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
