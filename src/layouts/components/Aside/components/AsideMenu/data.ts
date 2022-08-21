interface IDataType {
  path: string
  component: string
  name?: string
  alwaysShow?: boolean
  meta: {
    name: string
    icon?: string
    roles?: string[]
    parentId?: number
    [key: string]: any
  }
  children?: IDataType[]
}

// 模拟的菜单列表
export const menuList = ref<IDataType[]>([
  {
    path: '/dashboard',
    component: 'Layout',
    meta: {
      name: '首页',
      icon: 'HomeFilled',
      roles: ['sys:manage'],
    },
    children: [],
  },
  {
    path: '/system',
    name: 'system',
    alwaysShow: true,
    component: 'Layout',
    meta: {
      name: '系统管理',
      icon: 'Menu',
      roles: ['sys:manage'],
      parentId: 0,
    },
    children: [
      {
        path: '/department',
        name: 'department',
        alwaysShow: false,
        component: '/system/department/department',
        meta: {
          name: '部门管理',
          icon: 'Platform',
          roles: ['sys:dept'],
          parentId: 17,
        },
      },
      {
        path: '/userList',
        name: 'userList',
        alwaysShow: false,
        component: '/system/user/userList',
        meta: {
          name: '用户管理',
          icon: 'UserFilled',
          roles: ['sys:user'],
          parentId: 17,
        },
      },
      {
        path: '/roleList',
        name: 'roleList',
        alwaysShow: false,
        component: '/system/role/roleList',
        meta: {
          name: '角色管理',
          icon: 'StarFilled',
          roles: ['sys:role'],
          parentId: 17,
        },
      },
      {
        path: '/menuList',
        name: 'menuList',
        alwaysShow: false,
        component: '/system/menu/menuList',
        meta: {
          name: '菜单管理',
          icon: 'IceCreamSquare',
          roles: ['sys:menu'],
          parentId: 17,
        },
      },
    ],
  },
  {
    path: '/goods',
    name: 'goods',
    alwaysShow: true,
    component: 'Layout',
    meta: {
      name: '商品管理',
      icon: 'Edit',
      roles: ['sys:goods'],
      parentId: 0,
    },
    children: [
      {
        path: '/goodsCategory',
        name: 'goodsCategory',
        alwaysShow: false,
        component: '/system/goodsCategory/goodsCategoryList',
        meta: {
          name: '商品分类',
          icon: 'Share',
          roles: ['sys:goodsCategory'],
          parentId: 34,
        },
      },
    ],
  },
  {
    path: '/systemConfig',
    name: 'systemConfig',
    alwaysShow: true,
    component: 'Layout',
    meta: {
      name: '系统工具',
      icon: 'SetUp',
      roles: ['sys:tools'],
      parentId: 0,
    },
    children: [
      {
        path: '/document',
        name: 'http://42.193.158.170:8089/swagger-ui/index.html',
        alwaysShow: false,
        component: '/system/config/systemDocument',
        meta: {
          name: '接口文档',
          icon: 'Document',
          roles: ['sys:document'],
          parentId: 42,
        },
      },
    ],
  },
])
