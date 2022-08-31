import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { App } from 'vue'
import { useUser, useRouterStore } from '@/store'
import Layout from '../layouts/index.vue'
import { pathToCamel } from '@/utils'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { __DEFAULT_ROUTER_LOGIN_URL, __DEFAULT_DASHBOARD_URL } from '@/config'

Nprogress.configure({ showSpinner: false })

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/layouts/components/Router/redirect.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/Login/login.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/404/404.vue'),
  },
]
const asyncRoutes: RouteRecordRaw = {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard/dashboard.vue'),
      meta: {
        title: '首页',
        affix: true,
      },
    },
    {
      path: '/profile/password',
      name: 'ProfilePassword',
      component: () => import('@/views/Profile/password.vue'),
      meta: {
        title: '密码',
        cache: true,
      },
    },
  ],
}

export const errorRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)',
  redirect: '/404',
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

const whiteList = [__DEFAULT_ROUTER_LOGIN_URL]

// 路由加载前
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    // 开始进度条
    Nprogress.start()

    const userStore = useUser()
    const routerStore = useRouterStore()
    // token存在的情况
    if (userStore.curToken) {
      if (to.path === __DEFAULT_ROUTER_LOGIN_URL) {
        next(__DEFAULT_DASHBOARD_URL)
      } else {
        // 用户信息不存在，则重新拉取用户等信息
        if (!userStore.user.id) {
          // 获取用户信息
          await userStore.getUserInfoAction()

          // 获取菜单路由
          const menuRoutes = await routerStore.getMenuRoutes()

          // 根据后端菜单路由，生成KeepAlive路由
          const keepAliveRoutes = getKeepAliveRoutes(menuRoutes, [])

          // 添加菜单路由
          asyncRoutes.children?.push(...keepAliveRoutes)
          router.addRoute(asyncRoutes)

          // 添加错误路由
          router.addRoute(errorRoute)

          // 保存路由数据
          routerStore.setRoutes(constantRoutes.concat(asyncRoutes))

          // 搜索菜单时使用
          routerStore.setSearchMenu(keepAliveRoutes)

          next({ ...to, replace: true })
        } else {
          next()
        }
      }
    } else {
      // 没有token的情况下，可以进入白名单
      if (whiteList.indexOf(to.path) > -1) {
        next()
      } else {
        next(__DEFAULT_ROUTER_LOGIN_URL)
      }
    }
  }
)
// 路由加载完成后
router.afterEach(() => {
  // 结束进度条
  Nprogress.done()
})

/**
 * 获取扁平化路由，将多级路由转换成一级路由
 * @param rs
 * @param breadcrumb
 * @returns
 */
export const getKeepAliveRoutes = (
  rs: RouteRecordRaw[],
  breadcrumb: string[]
): RouteRecordRaw[] => {
  const routerList: RouteRecordRaw[] = []

  rs.forEach((item: any) => {
    if (item.meta.title) {
      breadcrumb.push(item.meta.title)
    }
    if (item.children && item.children.length > 0) {
      // 递归
      routerList.push(...getKeepAliveRoutes(item.children, breadcrumb))
    } else {
      item.meta.breadcrumb.push(...breadcrumb)
      routerList.push(item)
    }
    breadcrumb.pop()
  })
  return routerList
}
// 加载vue组件
const layoutModules = import.meta.glob('/src/views/**/*.vue')

// 根据路径，动态获取vue组件
const getDynamicComponent = (path: string): any => {
  const component = layoutModules[`/src/views/${path}.vue`]
  if (!component) {
    console.error('component error', path)
  }
  return component
}

// 根据菜单列表，生成路由数据
export const generateRoutes = (menuList: any[]): RouteRecordRaw[] => {
  const routerList: RouteRecordRaw[] = []
  menuList.forEach((menu: any) => {
    let component: any // 组件路径
    let path: any // 路由路径
    if (menu.children && menu.children.length > 0) {
      // 含有子菜单
      component = () => import('@/layouts/index.vue')
      path = '/p/' + menu.id
    } else {
      if (menu.url) {
        component = getDynamicComponent(menu.url)
        path = '/' + menu.url
      }
    }
    const route: RouteRecordRaw = {
      path: path,
      name: pathToCamel(path),
      component: component,
      children: [],
      meta: {
        title: menu.name,
        icon: menu.icon,
        id: '' + menu.id,
        cache: true,
        _blank: menu.openStyle === 1,
        breadcrumb: [],
      },
    }

    // 有子菜单的情况下
    if (menu.children && menu.children.length > 0) {
      route.children?.push(...generateRoutes(menu.children))
    }
    routerList.push(route)
  })
  return routerList
}

// 注册路由
export function setupRouter(app: App) {
  app.use(router)
}
