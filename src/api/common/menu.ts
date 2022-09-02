import { service } from '@/utils'

export function useMenuNav() {
  return service.get('/data/menu/nav.json')
}

export const useAuthorityListApi = () => {
  return service.get('/data/menu/authority.json')
}

export const useMenuList = () => {
  return service.get('/data/menu/list.json')
}

export const useMenuApi = (id: Number) => {
  return service.get('/data/menu/1.json')
}

// mock
export const useMenuNavApi = () => service({ url: '/menu/nav', method: 'get' })

// 获取订单列表
// export const getList = (data: any) => service({ url: '/list', method: 'get', data })
// 获取用户列表
// export const getUserList = () => service({ url: '/userList', method: 'get' })
// 获取权限列表
// export const getRoleList = () => service({ url: '/roleList', method: 'get' })
// 获取权限数据列表
// export const getAuthorityList = () => service({ url: '/getAuthority ', method: 'get' })
// 获取路由数据列表
// export const getRouterList = () => service({ url: '/getRouter', method: 'get' })
