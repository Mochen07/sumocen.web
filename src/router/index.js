import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/home'

Vue.use(VueRouter)

const Router = new VueRouter({
  routes: [
    { path: '/', component: Home }
    // ...
  ]
})

export default Router
