import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'app-application',
  state: () => ({
    opened: true,
    device: 'desktop',
  }),
  actions: {
    setCollapse(): boolean {
      return (this.opened = !this.opened)
    },
  },
})
