import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'app-application',
  state: () => ({
    opened: true,
    device: 'desktop',
  }),
})
