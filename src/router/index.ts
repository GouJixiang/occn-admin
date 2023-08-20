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
    name: 'home',
    redirect: { name: 'dashboard-staging' },
    component: () => import('@/view/home/index.vue'),
    meta: {
      title: '首页',
      authentication: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '仪表盘',
          authentication: true
        },
        children: [
          {
            path: '/dashboard/staging',
            name: 'dashboard-staging',
            component: () => import('@/view/dashboard/staging/index.vue'),
            meta: {
              title: '工作台'
            }
          },
          {
            path: '/dashboard/board',
            name: 'dashboard-board',
            component: () => import('@/view/dashboard/board/index.vue'),
            meta: {
              title: '数据看板'
            }
          }
        ]
      },
      {
        path: '/applications',
        name: 'applications',
        meta: {
          title: '应用中心',
          authentication: true
        },
        children: [
          {
            path: '/applications/manager',
            name: 'applications-manager',
            component: () => import('@/view/applications/manager/index.vue'),
            meta: {
              title: '应用管理'
            }
          }
        ]
      },
      {
        path: '/hardware',
        name: 'hardware',
        meta: {
          title: '服务器中心',
          authentication: true
        },
        children: [
          {
            path: '/hardware/manager',
            name: 'hardware-manager',
            component: () => import('@/view/hardware/manager/index.vue'),
            meta: {
              title: '服务器管理'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
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
  window.$loadingBar?.start()
  if (to.name === 'login') next()
  else if (
    to.matched.some((record) => record.meta.authentication) &&
    to.meta.authentication
  ) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
      document.title = 'OCCN - ' + to.meta.title
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  window.$loadingBar?.finish()
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
