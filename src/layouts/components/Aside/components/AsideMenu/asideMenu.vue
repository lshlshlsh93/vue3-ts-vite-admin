<template>
  <el-menu
    :default-active="defaultActive"
    :unique-opened="appStore.theme.uniqueOpened"
    background-color="transparent"
    :collapse-transition="false"
    :collapse="!appStore.sidebarOpened"
    router
    mode="vertical"
  >
    <menu-item
      v-for="menu in routerStore.menuRoutes"
      :key="menu.path"
      :menu="menu"
    />
  </el-menu>
</template>
<script setup lang="ts">
import MenuItem from '../AsideItem/asideItem.vue'
import { useApplication, useRouterStore } from '@/store'
import { useRoute } from 'vue-router'

const appStore = useApplication()
const routerStore = useRouterStore()
const route = useRoute()

// 当前激活的菜单
const defaultActive = computed(() => {
  const { path } = route
  return path
})
</script>
