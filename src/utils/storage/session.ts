
/**
 * 使用sessionStorage进行封装缓存，添加有效期的选项
 */
class SessionCache {
  getCache<T>(key: string) {
    const valueStr = window.sessionStorage.getItem(key);
    if (!valueStr) {
      return null;
    }
    const value = JSON.parse(valueStr);
    return value as T;
  }

	setCache(key:string, value:unknown) {
		window.sessionStorage.setItem(key, JSON.stringify(value))
	}

	removeCache(key:string) {
		window.sessionStorage.removeItem(key)
	}

	clearCache() {
		window.sessionStorage.clear()
	}
}

export const sessionCache = new SessionCache()
