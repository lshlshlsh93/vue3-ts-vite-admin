import { AppCache, sessionCache } from '@/utils'
import { defineStore } from 'pinia'
import { useLoginApi, useLogoutApi, useUserInfoApi } from '@/api'
import { IUser, IUserInfo } from '@/interface'
import { CacheKey } from '@/config'
export const userStore = defineStore({
  id: 'app-user',
  state: (): IUserInfo => ({
    user: {
      id: '',
      username: '',
      email: '',
      avatar: '',
      isAdmin: false,
    },
    token: AppCache.getToken(),
  }),
  actions: {
    setUser(value: any) {
      this.user = value
    },
    setToken(value: string) {
      this.token = value
      sessionCache.setCache(CacheKey._Token_Key, value)
    },
    async loginAction(loginForm: any) {
      const res: any = await useLoginApi(loginForm)
      if (res.access_token) {
        this.setToken(res.access_token)
      }
    },
    async getUserInfoAction() {
      const res: any = await useUserInfoApi()
      if (res.code === 0) {
        const { data } = res
        this.setUser(data)
      }
    },
    async logoutAction() {
      await useLogoutApi()
      // 移除 token
      this.setToken('')
      // 刷新页面
      location.reload()
    },
  },
  getters: {
    curUser(): IUser {
      return this.user
    },
    curUserName(): string {
      return this.user.username
    },
    curUserAvatar(): string {
      return this.user.avatar
    },
    curToken(): string {
      return this.token
    },
  },
})
