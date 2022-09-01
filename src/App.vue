<script setup lang="ts">
import { handleThemeStyle } from './hooks'
import { __PROJECT_TITLE } from './config'
import { useTitle } from '@vueuse/core'
import { useApplication } from '@/store'
const appStore = useApplication()
// 设置项目标题
useTitle(__PROJECT_TITLE)
onMounted(() => {
  nextTick(() => {
    // 初始化主题样式
    handleThemeStyle(appStore.theme)
  })
})
</script>
<template>
  <router-view />
</template>
<style lang="scss" scoped></style>
