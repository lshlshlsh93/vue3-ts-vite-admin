export interface ITheme {
  /** 侧栏风格 [light、dark] */
  sidebarStyle: sidebarStyle | string
  /** 顶栏风格 [light、theme] */
  headerStyle: headerStyle | string
  /** 主题颜色 */
  primaryColor: string
  /** 侧栏排他展开(只保持一个子菜单展开) */
  uniqueOpened: boolean
  /** 开启logo */
  isLogo: boolean
  /** 开启面包屑 */
  isBreadcrumb: boolean
  /** 开启标签页 */
  isTabsView: boolean
  /** 开启标签页缓存 */
  isTabsCache: boolean
  /** 标签页风格 [style-1、style-2] */
  tabsStyle: tabsStyle | string
}
type sidebarStyle = 'light' | 'dark'
type headerStyle = 'light' | 'theme'
type tabsStyle = 'style-1' | 'style-2'
