import { IMenuType } from '@/interface'

// 模拟的菜单列表
const data = ref<IMenuType[]>([
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
export const menuList = [
  {
    id: 1,
    name: '系统管理',
    url: null,
    openStyle: 0,
    icon: 'icon-setting',
    children: [
      {
        id: 11,
        name: '菜单管理',
        url: 'menu/index',
        openStyle: 0,
        icon: 'icon-menu',
      },
      {
        id: 12,
        name: '用户管理',
        url: 'user/index',
        openStyle: 0,
        icon: 'icon-user',
      },
      {
        id: 13,
        name: '机构管理',
        url: 'org/index',
        openStyle: 0,
        icon: 'icon-cluster',
      },
      {
        id: 14,
        name: '角色管理',
        url: 'role/index',
        openStyle: 0,
        icon: 'icon-team',
      },
      {
        id: 15,
        name: '岗位管理',
        url: 'post/index',
        openStyle: 0,
        icon: 'icon-addteam',
      },
    ],
  },
  {
    id: 3,
    name: '图表',
    url: null,
    openStyle: 0,
    icon: 'icon-barchart',
    children: [
      {
        id: 31,
        name: '堆叠面积图',
        url: 'charts/AreaStack',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
      {
        id: 32,
        name: '虚线柱状图',
        url: 'charts/CategoryStack',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
      {
        id: 33,
        name: '上证指数图',
        url: 'charts/Candlestick',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
    ],
  },
  {
    id: 4,
    name: '编辑器',
    url: null,
    openStyle: 0,
    icon: 'icon-edit',
    children: [
      {
        id: 41,
        name: '富文本编辑器',
        url: 'editor/WangEditor',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
      {
        id: 42,
        name: 'Markdown编辑器',
        url: 'editor/MdEditor',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
    ],
  },
  {
    id: 5,
    name: '界面',
    url: null,
    openStyle: 0,
    icon: 'icon-windows',
    children: [
      {
        id: 51,
        name: 'Icon 图标',
        url: 'icons/index',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
      {
        id: 52,
        name: '二维码生成',
        url: 'qrcode/index',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
      {
        id: 53,
        name: '页面打印',
        url: 'printJs/index',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
      {
        id: 54,
        name: '图片裁剪',
        url: 'cropper/index',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
      {
        id: 55,
        name: '复制文本',
        url: 'copy/index',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
    ],
  },
  {
    id: 10,
    name: '多级菜单',
    url: null,
    openStyle: 0,
    icon: 'icon-unorderedlist',
    children: [
      {
        id: 101,
        name: '菜单1',
        url: null,
        openStyle: 0,
        icon: 'icon-unorderedlist',
        children: [
          {
            id: 1011,
            name: '菜单11',
            url: 'menu/menu1/menu11/index',
            openStyle: 0,
            icon: 'icon-unorderedlist',
          },
          {
            id: 1012,
            name: '菜单13',
            url: null,
            openStyle: 0,
            icon: 'icon-unorderedlist',
            children: [
              {
                id: 10121,
                name: '菜单121',
                url: 'menu/menu1/menu12/menu121/index',
                openStyle: 0,
                icon: 'icon-unorderedlist',
              },
              {
                id: 10122,
                name: '菜单122',
                url: 'menu/menu1/menu12/menu122/index',
                openStyle: 0,
                icon: 'icon-unorderedlist',
              },
            ],
          },
          {
            id: 1013,
            name: '菜单13',
            url: 'menu/menu1/menu13/index',
            openStyle: 0,
            icon: 'icon-unorderedlist',
          },
        ],
      },
      {
        id: 102,
        name: '菜单2',
        url: 'menu/menu2/index',
        openStyle: 0,
        icon: 'icon-unorderedlist',
      },
    ],
  },
]
