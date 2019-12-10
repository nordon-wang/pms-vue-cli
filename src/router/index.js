import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home/index.vue'
import News from 'views/News/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/news',
      component: News
    }
  ]
})
