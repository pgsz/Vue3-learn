import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 全局前置守卫
// router.beforeEach((to, from, next) => {
//   //
// })


export default router
