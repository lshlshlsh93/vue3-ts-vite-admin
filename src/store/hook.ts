import { store } from './index'

import { appStore } from './modules/application'
import { tabStore } from './modules/tabs'
import { userStore } from './modules/user'
import { routerStore } from './modules/router'

export function useTab() {
  return tabStore(store)
}

export function useRouterStore() {
  return routerStore(store)
}

export function useUser() {
  return userStore(store)
}

export function useApplication() {
  return appStore(store)
}
