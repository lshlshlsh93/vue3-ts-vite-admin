import { useApplication } from '@/store'

/**
 * 监听页面的窗口大小变化，判断是 PC 还是 移动端
 * @author li
 * @createTime 2021-09-28
 */
export const useResizeHandle = () => {
  const appStore = useApplication()
  const { body } = document
  const _width = 992

  onBeforeMount(() => {
    window.addEventListener('resize', _resizeHandler)
  })
  onBeforeUnmount(() => {
    window.addEventListener('resize', _resizeHandler)
  })
  onMounted(() => {
    _resizeHandler()
  })
  // 判断窗口宽度是否为移动端
  const _isMobile = () => {
    const rect = body.getBoundingClientRect()
    return rect.width - 1 < _width
  }

  // 监听窗口大小，判断终端
  const _resizeHandler = () => {
    if (!document.hidden) {
      const isMobile = _isMobile()
      appStore.device = isMobile ? 'mobile' : 'desktop'

      if (isMobile) {
        appStore.sidebarOpened = false
        appStore.theme.isTabsView = false
        appStore.theme.isBreadcrumb = false
      }
    }
  }
}
