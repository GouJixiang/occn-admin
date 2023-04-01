import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  Router
} from 'vue-router'
import { App } from 'vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由拦截器
router.beforeEach(async (to, from, next) => {
  if (
    to.matched.some((record) => record.meta.authentication) &&
    to.meta.authentication
  ) {
    const token = localStorage.getItem('dns_token')
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  next()
})

router.afterEach(() => {
  // window.$loading?.finish()
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
