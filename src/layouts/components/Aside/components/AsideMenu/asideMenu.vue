<template>
  <!-- 侧边栏logo信息 -->
  <AsideLogo class="layout-logo" v-if="!isCollapse" />
  <el-menu
    :default-active="activeMenu"
    unique-opened
    background-color="#304156"
    router
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <MenuItem :menuList="menuList" />
  </el-menu>
</template>
<script setup lang="ts">
import AsideLogo from '../AsideLogo/asideLogo.vue'
import MenuItem from '../AsideItem/asideItem.vue'
import { useApplication } from '../../../../../store'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { ComputedRef } from 'vue'
import { menuList } from './data'

const route: RouteLocationNormalizedLoaded = useRoute()
const appStore = useApplication()

// 当前激活的菜单
const activeMenu: ComputedRef<string> = computed(() => {
  const { path } = route
  return path
})
// 是否关闭
const isCollapse: ComputedRef<boolean> = computed(() => {
  return !appStore.opened
})
const handleOpen = (key: string | number, keyPath: string[]) => {}
const handleClose = (key: string | number, keyPath: string[]) => {}
</script>
<style lang="scss" scoped>
@keyframes logoAnimation {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

.layout-logo {
  animation: logoAnimation 0.5s ease-out;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 200px;
}
.el-menu {
  border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title) {
  color: #f4f4f5 !important;
}
:deep(.el-menu .el-menu-item) {
  color: #bfcbd9;
}
:deep(.el-menu-item .is-active) {
  color: #409eff !important;
}
:deep(.el-menu-item .is-opened) {
  background-color: #1f2d3d !important;
}
:deep(.el-menu-item:hover) {
  background-color: #001528 !important;
}
</style>
