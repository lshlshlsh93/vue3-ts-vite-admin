<template>
  <el-aside width="auto" class="aside" :class="sidebarClass">
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
  const sidebarOpened = appStore.sidebarOpened
    ? 'aside-expend'
    : 'aside-compress'
  const isDark = appStore.theme.sidebarStyle === 'dark' ? 'sidebar-dark' : ''
  return sidebarOpened + ' ' + isDark
})
</script>
<style lang="scss" scoped></style>
