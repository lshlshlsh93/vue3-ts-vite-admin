import { defineStore } from 'pinia'
import { ITab, ITheme } from '@/interface'
import { AppCache } from '@/utils'

export const appStore = defineStore({
  id: 'app-application',
  state: () => ({
    opened: true as boolean,
    // 侧边栏是否展开
    sidebarOpened: AppCache.getSideBarOpened() as boolean,
    // 组件大小
    componentSize: AppCache.getComponentSize() as string,
    // 主题
    theme: AppCache.getTheme() as ITheme,
    // 设备类型
    device: 'desktop' as string,
    tabsList: [] as ITab[],
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
    setCollapse(): boolean {
      return (this.opened = !this.opened)
    },
    setTabsList(tab: ITab): void {
      if (this.tabsList.some((item: any) => item.path === tab.path)) return
      this.tabsList.push(tab)
    },
  },
  getters: {
    getTabList(): any {
      return this.tabsList
    },
  },
})
