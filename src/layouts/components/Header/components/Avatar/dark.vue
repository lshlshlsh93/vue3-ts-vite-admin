<template>
  <div class="dark">
    <span @click.stop="toggleDark()">Dark</span>
    <el-switch
      class="mt-2"
      :active-icon="Moon"
      :inactive-icon="Sunny"
      inline-prompt
      v-model="isDark"
      :size="cs"
    ></el-switch>
  </div>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useApplication } from '@/store'
import { Sunny, Moon } from '@element-plus/icons-vue'
const appStore = useApplication()
const cs: any = appStore.curComponentSize
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style lang="scss" scoped>
.dark {
  span {
    font-size: 12px;
  }
}
</style>
