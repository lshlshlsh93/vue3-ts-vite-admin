import { service } from '@/utils'

export const useUserInfoApi = () => {
  return service.get('/data/user/info.json')
}

export const updatePasswordApi = (data: any) => {
  return service.put('/data/success.json', data)
}

export const useUserApi = (id: number) => {
  return service.get('/data/user/1.json')
}

export const useLoginApi = (data: any) => {
  return service.post('/data/login.json', data, {
    auth: {
      username: 'web',
      password: '123456',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

export const useLogoutApi = () => {
  return service.post('/data/success.json')
}
