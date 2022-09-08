<script setup lang="ts">
import { handleThemeStyle } from './hooks'
import { __PROJECT_TITLE } from './config'
import { useTitle } from '@vueuse/core'
import { useApplication } from '@/store'
import { useI18n } from 'vue-i18n'
import { messages } from '@/i18n'
import { useResizeHandle } from '@/utils'
const appStore = useApplication()
const { t } = useI18n()
const size: any = computed(() => appStore.componentSize)
const locale = computed(() => messages[appStore.language].el)
// 设置项目标题
useTitle(__PROJECT_TITLE)
onBeforeMount(() => {
  document.body.removeChild(document.getElementById('spinner') as HTMLElement)
}),
  onMounted(() => {
    nextTick(() => {
      // 初始化主题样式
      handleThemeStyle(appStore.theme)
    })
  })
// useResizeHandle()
</script>
<template>
  <el-config-provider :size="size" :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<style lang="scss" scoped></style>
