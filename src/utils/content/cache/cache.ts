import { localCache, sessionCache } from '../storage'
import { CacheKey, __df_t } from '@/config'
import { ITheme } from '@/interface'

/**
 * 缓存
 *
 * @method getToken 获取token
 * @method setToken 设置token
 *
 * @method getSideBarOpened 获取侧边栏状态
 * @method setSideBarOpened 设置侧边栏状态
 *
 * @method getLanguage 获取Language
 * @method setLanguage 设置Language
 *
 * @method getComponentSize 获取组件大小
 * @method setComponentSize 设置组件大小
 *
 * @method getTheme 获取主题
 * @method setTheme 设置主题
 * @method removeTheme 移除主题
 */
class SyStemCache {
  getToken = (): string => {
    return sessionCache.getCache(CacheKey._Token_Key) || ''
  }
  setToken = (value: string): void => {
    sessionCache.setCache(CacheKey._Token_Key, value)
  }
  getTheme = (): ITheme => {
    return (sessionCache.getCache(CacheKey._Theme_Key) as ITheme) || __df_t
  }
  setTheme = (value: ITheme): void => {
    sessionCache.setCache(CacheKey._Theme_Key, value)
  }
  removeTheme = () => {
    sessionCache.removeCache(CacheKey._Theme_Key)
  }

  getSideBarOpened = (): boolean => {
    return localCache.getCache(CacheKey._Sidebar_Opened_Key) || false
  }
  setSideBarOpened = (value: boolean): void => {
    localCache.setCache(CacheKey._Sidebar_Opened_Key, value)
  }

  getLanguage = (): string => {
    return localCache.getCache(CacheKey._Lang_Key) || 'zh-CN'
  }
  setLanguage = (value: string): void => {
    localCache.setCache(CacheKey._Lang_Key, value)
  }

  getComponentSize = (): string => {
    return localCache.getCache(CacheKey._Component_Size_Key) || 'default'
  }

  setComponentSize = (value: string): void => {
    localCache.setCache(CacheKey._Component_Size_Key, value)
  }
}

export const AppCache = new SyStemCache()
