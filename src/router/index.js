/*
 * @Author: Vhen
 * @Date: 2020-11-13 11:26:04
 * @LastEditors: Vhen
 * @LastEditTime: 2020-12-08 18:27:14
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const constantRoutes = [
  {
    path: '/test',
    component: ()=> import('views/test')
  },
  {
    path: '/',
    meta: {
      header: true,
      footer:true,
      auth:false,
      keepAlive: true
    },
    component: ()=> import('views/home')
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

//cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router