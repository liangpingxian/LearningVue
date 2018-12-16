import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HomePage from '@/pages/HomePage'
import AddInterface from '@/pages/AddInterface'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/AddInterface',
      name: 'AddInterface',
      component: AddInterface
    }
  ]
})
