import { store } from './index'

import { appStore } from './modules/application'
import { tabStore } from './modules/tabs'

export function useApplication() {
  return appStore(store)
}

export function useTab() {
  return tabStore(store)
}
