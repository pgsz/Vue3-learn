import { createRouter, createWebHashHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from './grouter'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// 全局后置钩子
router.afterEach(() => {
  NProgress.done()
})

export default router
