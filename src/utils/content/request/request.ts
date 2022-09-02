import axios, { AxiosInstance } from 'axios'
import qs from 'qs'

import { useUser } from '@/store'
import { AppCache } from '@/utils'
import { ElMessage } from 'element-plus'

const mock_b_l =
  'https://www.fastmock.site/mock/7d25773d893cdf01c4364b4922887a04/api'

export const service: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: mock_b_l,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
})
service.interceptors.request.use(
  (config: any) => {
    const userStore = useUser()
    // token是否存在
    if (userStore?.token) {
      config.headers.Authorization = 'Bearer ' + userStore.token
    }
    // 语言
    config.headers['Accept-Language'] = AppCache.getLanguage()

    // 追加时间戳，防止GET请求缓存
    if (config.method?.toUpperCase() === 'GET') {
      config.params = { ...config.params, t: new Date().getTime() }
    }

    if (
      Object.values(config.headers).includes(
        'application/x-www-form-urlencoded'
      )
    ) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const userStore = useUser()
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText || 'Error'))
    }
    const res = response.data
    // 响应成功
    if (res.code === 0) {
      return res
    }
    // 错误提示
    ElMessage.error(res.message)

    // 没有权限，如：未登录、登录过期等，需要跳转到登录页
    if (res.code === 401) {
      userStore.setToken('')
      location.reload()
    }

    return Promise.reject(new Error(res.msg || 'Error'))
  },
  (error: any) => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
