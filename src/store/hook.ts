import { store } from './index'

import { appStore } from './modules/application'
import { tabStore } from './modules/tabs'

export function useTab() {
  return tabStore(store)
}

export function useApplication() {
  return appStore(store)
}
