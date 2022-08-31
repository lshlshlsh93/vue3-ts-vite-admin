<template>
  <div class="tabs-container">
    <div class="tabs-item">
      <el-tabs
        v-model="activeTabName"
        :class="tabsStyleClass"
        type="card"
        @tab-click="handleTabClick"
        closable
        @tab-remove="handleTabRemove(activeTabName)"
      >
        <el-tab-pane
          v-for="tab in tabStore.curVisitedViews"
          :key="tab"
          :label="tab.title"
          :name="tab.path"
          :closable="!isAffix(tab)"
        />
      </el-tabs>
    </div>
    <el-dropdown
      class="tabs-action"
      trigger="click"
      placement="bottom-end"
      @command="handleClose"
    >
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Close" command="close"
            >关闭当前</el-dropdown-item
          >
          <el-dropdown-item :icon="CircleClose" command="closeOthers"
            >关闭其他</el-dropdown-item
          >
          <el-dropdown-item :icon="CircleCloseFilled" command="closeAll"
            >关闭所有</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
      <el-icon><arrow-down /></el-icon>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import type {
  RouteRecordRaw,
  RouteLocationNormalizedLoaded,
  Router,
} from 'vue-router'
import { useApplication, useTab, useRouterStore } from '@/store'
import {
  ArrowDown,
  CircleClose,
  CircleCloseFilled,
  Close,
} from '@element-plus/icons-vue'

const appStore = useApplication()
const tabStore = useTab()
const routerStore = useRouterStore()
const route = useRoute()
const router = useRouter()

// 当前激活的选项卡
const activeTabName = ref<string>(route.path)

// 选项卡的样式
const tabsStyleClass = computed(
  () => 'tabs-item-' + appStore.curTheme.tabsStyle
)

// 是否固定
const isAffix = (tab: any): any => {
  return tab.meta && tab.meta.affix
}

onMounted(() => {
  // 解决刷新选项卡数据丢失问题
  beforeRefresh()
  // 初始化选项卡
  initTab()
  // 添加选项卡
  addTab()
})

// 监听路由发生变化时,设置选项卡
watch(route, () => {
  // 当前路由，添加到tabs里
  if (route.name) {
    addTab()
  }
})

// 初始化tabs
const initTab = (): void => {
  const routers: RouteRecordRaw[] = routerStore.curRoutes
  const affixTabs: any[] = getAffixTabs(routers)
  for (const tab of affixTabs) {
    // 需要有tab名称
    if (tab.name) {
      tabStore.addView(tab)
    }
  }
}

// 获取需要固定的tabs
const getAffixTabs = (routes: RouteRecordRaw[]): any[] => {
  let tabs: any[] = []
  routes.forEach((route: RouteRecordRaw) => {
    if (route.meta && route.meta.affix) {
      tabs.push({
        fullPath: route.path,
        path: route.path,
        name: route.name,
        meta: {
          ...route.meta,
        },
      })
    }
    if (route.children) {
      const tmpTabs = getAffixTabs(route.children)
      if (tmpTabs.length >= 1) {
        tabs = [...tabs, ...tmpTabs]
      }
    }
  })
  return tabs
}

// 添加选项卡
const addTab = (): void => {
  tabStore.addView(route)
  tabStore.addCacheView(route)
  // 从当前路由获取path
  const { path } = route
  activeTabName.value = path
}

// 选项卡点击事件
const handleTabClick = (tab: any): void => {
  const { props } = tab
  if (props.name) {
    router.push(props.name)
  }
}
type ICommandType = 'close' | 'closeOthers' | 'closeAll'
// dropdown 关闭事件
const handleClose = (type: ICommandType): void => {
  switch (type) {
    case 'close':
      closeTab(router, route)
      break
    case 'closeOthers':
      closeOthersTab(router, route)
      break
    case 'closeAll':
      closeAllTab(router, route)
      break
  }
}

// 删除当前选项卡
const handleTabRemove = (path: string): void => {
  let tab: any = tabStore.curVisitedViews.filter(
    (tab: any) => tab.path === path
  )
  closeTab(router, tab[0])
}

// 解决刷新数据丢失的问题
const beforeRefresh = (): void => {
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('tabsView', JSON.stringify(tabStore.curVisitedViews))
  })
  let tabSession = sessionStorage.getItem('tabsView')
  if (tabSession) {
    let oldTabs = JSON.parse(tabSession)
    if (oldTabs.length > 0) {
      tabStore.visitedViews = oldTabs
    }
  }
}

/**
 * 关闭tab
 * @param router
 * @param tab
 */
const closeTab = (router: Router, tab: RouteLocationNormalizedLoaded): void => {
  if (tab.meta && tab.meta.affix) {
    return
  }
  tabStore.delView(tab)
  toLastView(router, tabStore.curVisitedViews, tab)
}

/**
 * 关闭其他tabs
 * @param router
 * @param tab
 */
const closeOthersTab = (
  router: Router,
  tab: RouteLocationNormalizedLoaded
): void => {
  router.push(tab)
  tabStore.delOtherViews(tab)
}

/**
 * 关闭全部 tab
 * @param router
 * @param tab
 */
const closeAllTab = (
  router: Router,
  tab: RouteLocationNormalizedLoaded
): void => {
  tabStore.delAllViews()
  toLastView(router, tabStore.curVisitedViews, tab)
}

/**
 * 跳转到最后一个tab
 * @param router
 * @param visitedViews
 * @param view
 */
const toLastView = (
  router: Router,
  visitedViews: any[],
  view: RouteLocationNormalizedLoaded
): void => {
  const lastView = visitedViews.slice(-1)[0]
  if (lastView) {
    router.push(lastView.fullPath)
  } else {
    if (view.name === 'dashboard') {
      router.replace({ path: '/redirect' + view.fullPath })
    } else {
      router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-container {
  display: flex;
  position: relative;
  z-index: 6;
  height: 40px;
  .tabs-item {
    transition: left 0.3s;
    flex-grow: 1;
    overflow: hidden;
    ::v-deep(.el-tabs__nav-prev) {
      padding: 0 10px;
      border-right: var(--el-border-color-extra-light) 1px solid;
    }
    ::v-deep(.el-tabs__nav-next) {
      padding: 0 10px;
      border-left: var(--el-border-color-extra-light) 1px solid;
    }
    ::v-deep(.is-scrollable) {
      padding: 0 32px;
    }
    ::v-deep(.el-tabs__active-bar) {
      height: 0;
    }
    ::v-deep(.el-tabs__item) {
      .is-icon-close {
        transition: none !important;
        &:hover {
          color: var(--el-color-primary-light-9);
          background-color: var(--el-color-primary);
          border-radius: 50%;
        }
      }
    }
  }
}

.tabs-item-style-1 {
  ::v-deep(.el-tabs__item) {
    padding: 0 15px !important;
    border-right: var(--el-border-color-extra-light) 1px solid;
    user-select: none;
    color: #8c8c8c;
    &:hover {
      color: #444;
      background: rgba(0, 0, 0, 0.02);
    }
    &.is-active {
      color: var(--el-color-primary);
      background-color: var(--el-color-primary-light-9);
      border-bottom: var(--el-border-color-light) 2px solid;
      &::before {
        background-color: var(--el-color-primary);
      }
    }
    &::before {
      content: '';
      width: 9px;
      height: 9px;
      margin-right: 8px;
      display: inline-block;
      background-color: #ddd;
      border-radius: 50%;
    }
  }
}

.tabs-item-style-2 {
  ::v-deep(.el-tabs__item) {
    padding: 0 15px !important;
    border-right: none;
    user-select: none;
    color: #8c8c8c;
    display: inline-block;

    &:hover {
      color: #444;
      background: rgba(0, 0, 0, 0.02);
      border-bottom: var(--el-color-primary) 2px solid;
    }

    &.is-active {
      color: var(--el-color-primary) !important;
      background-color: var(--el-color-primary-light-9) !important;
      border-bottom: var(--el-color-primary) 2px solid;
      &::before {
        background-color: var(--el-color-primary);
      }
    }
  }
}

.tabs-action {
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0 12px;
  align-items: center;
  cursor: pointer;
  color: #666;
  border-left: var(--el-border-color-extra-light) 1px solid;
  border-bottom: var(--el-border-color-light) 2px solid;
}
</style>
