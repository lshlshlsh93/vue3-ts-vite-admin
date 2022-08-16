import { store } from './index'

import { appStore } from './modules/application'

export function useApplication() {
  return appStore(store)
}
