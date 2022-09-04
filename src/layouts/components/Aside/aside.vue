<template>
  <el-aside
    :width="appStore.isSidebarOpened ? 'auto' : '64px'"
    class="aside"
    :class="sidebarClass"
  >
    <!-- 侧边栏logo信息 -->
    <AsideLogo v-if="appStore.theme.isLogo" />
    <AsideMenu />
  </el-aside>
</template>
<script setup lang="ts">
import { useApplication } from '@/store'
import AsideLogo from './components/AsideLogo/asideLogo.vue'
import AsideMenu from './components/AsideMenu/asideMenu.vue'

const appStore = useApplication()

const sidebarClass = computed(() => {
  // 侧边栏状态
  const sidebarOpened = appStore.isSidebarOpened
    ? 'aside-expend'
    : 'aside-compress'
  // 是否是暗色
  const isDark = computed(() => {
    return appStore.theme.sidebarStyle === 'dark' ? 'sidebar-dark' : ''
  })
  return sidebarOpened + ' ' + isDark.value
})
</script>
<style lang="scss" scoped></style>
