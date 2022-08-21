import { defineStore } from 'pinia'
import { ITab } from '../../interface/common/tab'

export const appStore = defineStore({
  id: 'app-application',
  state: () => ({
    opened: true as boolean,
    device: 'desktop' as string,
    tabsList: [] as ITab[],
  }),
  actions: {
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
