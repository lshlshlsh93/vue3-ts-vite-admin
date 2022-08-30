import { defineStore } from 'pinia'
import { RouteLocationNormalizedLoaded } from 'vue-router'

export const tabStore = defineStore({
  id: 'tabStore',
  state: () => ({
    visitedViews: [] as any[], // 访问过
    cachedViews: [] as any[], // 已经缓存
  }),
  actions: {
    /**
     * 添加新view
     * @param view 页面
     */
    addView(view: RouteLocationNormalizedLoaded): void {
      if (this.visitedViews.some((val) => val.path === view.path)) {
        return
      }
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta?.title || 'unknown',
        })
      )
    },
    /**
     * 添加缓存view
     * @param view
     */
    addCacheView(view: RouteLocationNormalizedLoaded): void {
      if (this.cachedViews.includes(view.name)) return
      // 是否有缓存选项
      if (view.meta.cache) {
        this.cachedViews.push(view.name)
      }
    },
    /**
     * 删除
     * @param view
     */
    delView(view: RouteLocationNormalizedLoaded): void {
      for (const [i, v] of this.visitedViews.entries()) {
        if (v.path === view.path) {
          this.visitedViews.splice(i, 1)
          break
        }
      }
      this.delCacheView(view).then()
    },
    /**
     * 删除缓存
     * @param view
     *
     */
    delCacheView(view: RouteLocationNormalizedLoaded): Promise<unknown> {
      return new Promise((resolve) => {
        const index = this.cachedViews.indexOf(view.name)
        if (index > -1) {
          this.cachedViews.splice(index, 1)
        }
        resolve([...this.cachedViews])
      })
    },
    /**
     * 删除其他
     * @param view
     */
    delOtherViews(view: RouteLocationNormalizedLoaded): void {
      this.visitedViews = this.visitedViews.filter((v) => {
        return v.meta.affix || v.path === view.path
      })
      const index = this.cachedViews.indexOf(view.name)
      if (index > -1) {
        this.cachedViews = this.cachedViews.slice(index, index + 1)
      } else {
        this.cachedViews = []
      }
    },
    /**
     * 删除所有
     */
    delAllViews(): void {
      this.visitedViews = this.visitedViews.filter((tab) => tab.meta.affix)
      this.cachedViews = []
    },
  },
})
