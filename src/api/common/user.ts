import { service } from '@/utils'

export const useUserInfo = () => {
  return service.get('/data/user/info.json')
}

export const updatePasswordApi = (data: any) => {
  return service.put('/data/success.json', data)
}

export const useUserApi = (id: number = 1) => {
  return service.get('/data/user/1.json')
}
export const useLogin = (data: any) => {
  return service.post('/data/login.json', data, {
    auth: {
      username: 'admin',
      password: 'admin',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}
export const useLogout = () => {
  return service.post('/data/success.json')
}

// mock
interface LoginInterface {
  userName: string
  password: string
}
// 登录接口
export const useLoginApi = (data: LoginInterface) =>
  service({
    url: '/login',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
// 获取用户信息接口
export const useUserInfoApi = () =>
  service({ url: '/user/info', method: 'get' })
// 退出登录接口
export const useLogoutApi = (data = {}) =>
  service({ url: '/logout', method: 'post', data })
