import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'

import Layout from '../layouts/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/Dashboard/dashboard.vue'),
        name: 'dashboard',
        meta: {
          name: '首页',
          icon: '#icondashboard',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/login.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 注册路由
export function setupRouter(app: App) {
  app.use(router)
}
