import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import secondPage from '@/components/secondPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'homePage',
      component: home,
      path: '/'
    },
    {
      path: '/second',
      component: secondPage,
      name: 'secondPage'
    }
  ]
})
