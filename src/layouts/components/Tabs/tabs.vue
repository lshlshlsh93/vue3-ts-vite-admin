<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    @tab-click="handleTabClick"
    closable
    @tab-remove="removeTab(activeTab)"
  >
    <el-tab-pane
      v-for="item in tabList"
      :key="item.path"
      :label="item.name"
      :name="item.path"
    />
  </el-tabs>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'
import { ITab } from '../../../interface/common/tab'
import { useApplication } from '../../../store'

const appStore = useApplication()
const route: RouteLocationNormalizedLoaded = useRoute()
const router: Router = useRouter()

const tabList = computed(() => {
  return appStore.tabsList
})
// 当前激活的选项卡
const activeTab = ref<string>('')
// 设置当前激活的选项卡
const setActiveTab = (): void => {
  activeTab.value = route.path
}
// 添加选项卡
const addTab = (): void => {
  // 从当前路由获取path和title
  const { path, meta } = route
  console.log(route)

  const tab: ITab = {
    path: path,
    name: meta.name as string,
  }
  appStore.setTabsList(tab)
}
// 删除当前选项卡
const removeTab = (targetName: string): void => {
  // 首页不能删除
  if (targetName === '/dashboard') {
    ElMessage({
      message: '首页不能删除',
      type: 'warning',
      duration: 1000,
    })
    return
  }
  // 选项卡数据列表
  const tabs = tabList.value
  // 当前激活的选项卡
  let activeName = activeTab.value
  if (activeName === targetName) {
    tabs.forEach((tab: ITab, index: number) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }
  // 重新设置当前激活的选项卡
  activeTab.value = activeName
  // 重新设置选项卡数据
  appStore.tabsList = tabs.filter((tab: ITab) => tab.path !== targetName)
  // 重新跳转路由
  router.push({ path: activeName })
}
// 监听路由发生变化时,设置选项卡
watch(
  () => route.path,
  () => {
    // 设置激活的选项卡
    setActiveTab()
    // 添加选项卡
    addTab()
  }
)
// 解决刷新数据丢失的问题
const beforeRefresh = (): void => {
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('tabsView', JSON.stringify(tabList))
  })
  let tabSession = sessionStorage.getItem('tabsView')
  if (tabSession) {
    let oldTabs = JSON.parse(tabSession)
    if (oldTabs.length > 0) {
      appStore.tabsList = oldTabs
    }
  }
}
onMounted(() => {
  // 解决刷新选项卡数据丢失问题
  beforeRefresh()
  // 设置激活的选项卡
  setActiveTab()
  // 添加选项卡
  addTab()
})
// 选项卡点击事件
const handleTabClick = (tab: any): void => {
  const { props } = tab
  // 路由跳转
  router.push({ path: props.name })
}
</script>
<style lang="scss" scoped>
:deep(.el-tabs__header) {
  margin: 0;
}
:deep(.el-tabs__item) {
  height: 26px !important;
  line-height: 26px !important ;
  text-align: center !important;
  border: 1px solid #d8dce5 !important;
  margin: 0 3px !important;
  color: #495060;
  font-size: 12px !important;
  padding: 0 10px !important;
}
:deep(.el-tabs__item:hover) {
  color: #495060 !important;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.is-active) {
  border-bottom: 1px solid transparent !important;
  border: 1px solid #42b983 !important;
  background-color: #42b983 !important;
  color: #fff !important;
}
:deep(.is-active:hover) {
  color: #fff !important;
}
</style>
