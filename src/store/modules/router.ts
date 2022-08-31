import { useMenuNavApi } from '@/api'
import { generateRoutes } from '@/router'
import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'

export const routerStore = defineStore({
  id: 'app-router',
  state: () => ({
    menuRoutes: [] as RouteRecordRaw[],
    searchMenu: [] as RouteRecordRaw[],
    routes: [] as RouteRecordRaw[],
  }),
  actions: {
    async getMenuRoutes() {
      const res: any = await useMenuNavApi()
      if (res.code === 0) {
        const { data } = res
        const routes = generateRoutes(data)
        this.menuRoutes.push(...routes)
      }

      return this.menuRoutes
    },
    setSearchMenu(routers: RouteRecordRaw[]) {
      this.searchMenu = routers
    },
    setRoutes(routers: RouteRecordRaw[]) {
      this.routes = routers
    },
  },
  getters: {
    curMenuRoutes(): RouteRecordRaw[] {
      return this.menuRoutes
    },
    curSearchMenu(): RouteRecordRaw[] {
      return this.searchMenu
    },
    curRoutes(): RouteRecordRaw[] {
      return this.routes
    },
  },
})
