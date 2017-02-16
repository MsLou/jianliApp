import Vue from 'vue'
// import VueRouter from 'vue-router'
// import routes from './routes'
import App from './router/home'
import './assets/css/common.css'

// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

new Vue({
  // router,
  components: {
    App
  }
}).$mount('#app')
