/**
 * 使用localStorage进行封装缓存，添加有效期的选项
 */
class LocalCache {
  getCache<T>(key: string) {
    const valueStr = window.localStorage.getItem(key)
    if (!valueStr) {
      return null
    }
    const value = JSON.parse(valueStr)
    if (value.time === 0) {
      return value.data as T
    }
    const now = new Date().getTime()
    if (now >= value.time) {
      window.localStorage.removeItem(key)
      return null
    }
    return value.data as T
  }

  setCache(key: string, value: unknown, expireTime = 0) {
    const obj = {
      data: value,
      time: expireTime ? new Date().getTime() + expireTime : 0,
    }
    window.localStorage.setItem(key, JSON.stringify(obj))
  }

  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export const localCache = new LocalCache()
