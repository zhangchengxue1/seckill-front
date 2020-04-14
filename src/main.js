import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUi from 'element-ui'

// import css
import 'element-ui/lib/theme-chalk/index.css'

import routes from './js/router/routers.js'

Vue.use(VueRouter)
Vue.use(ElementUi)


const router = new VueRouter({
  mode:"history",
  routes // (缩写) 相当于 routes: routes
})


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
