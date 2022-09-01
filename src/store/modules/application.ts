import { defineStore } from 'pinia'
import { ITheme } from '@/interface'
import { AppCache } from '@/utils'
export const appStore = defineStore({
  id: 'app-application',
  state: () => ({
    // 侧边栏是否展开
    sidebarOpened: AppCache.getSideBarOpened(),
    // 组件大小
    componentSize: AppCache.getComponentSize(),
    // 主题
    theme: AppCache.getTheme(),
    // 设备类型
    device: 'desktop',
  }),
  actions: {
    setSidebarOpened(): void {
      this.sidebarOpened = !this.sidebarOpened
      AppCache.setSideBarOpened(this.sidebarOpened)
    },
    setComponentSize(size: string): void {
      this.componentSize = size
      AppCache.setComponentSize(size)
    },
    setTheme(theme: ITheme) {
      this.theme = theme
      AppCache.setTheme(theme)
    },
  },
  getters: {
    isSidebarOpened(): boolean {
      return this.sidebarOpened
    },
    curComponentSize(): string {
      return this.componentSize
    },
    curTheme(): ITheme {
      return this.theme
    },
    curDevice(): string {
      return this.device
    },
  },
})
