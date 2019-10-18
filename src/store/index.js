import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    global
    // ...
  }
})

export default Store
