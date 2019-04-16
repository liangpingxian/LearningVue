import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/pages/Login'
import HomePage from '@/pages/HomePage'
import InterfaceShow from '@/pages/InterfaceShow'
import OverView from '@/pages/OverView'
import UpdateLog from '@/pages/UpdateLog'
import CommonParams from '@/pages/CommonParams'
import AddInterface from '@/pages/AddInterface'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          name: '概述',
          path: '/overview',
          component: OverView
        },
        {
          name: '更新日志',
          path: '/updateLog',
          component: UpdateLog
        },
        {
          name: '通用参数',
          path: '/commonParams',
          component: CommonParams
        },
        {
          name: '全局错误码',
          path: '/errorCode',
          component: InterfaceShow
        },
        {
          name: '接口版本对比',
          path: '/interfaceCompare',
          component: InterfaceShow
        },
        {
          name: '接口',
          path: '/interface/:id',
          component: InterfaceShow
        },
        {
          name: '新增接口',
          path: '/AddInterface',
          component: AddInterface
        },
        {
          path: '',
          redirect: '/overview'
        }
      ]
    }
  ]
})
