import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    meta: {
      title: '费用报销'
    },
    component: () => import( /* webpackChunkName: "home" */ './components/Home.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '图片暗水印-解密'
    },
    component: () => import( /* webpackChunkName: "test" */ './components/Test.vue')
  },
  ]
})