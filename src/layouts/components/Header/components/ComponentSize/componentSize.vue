<template>
  <el-dropdown trigger="click" @command="handleComponentSizeChange">
    <svg-icon icon="icon-font-size" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="large" :disabled="componentSize === 'large'">
          large
        </el-dropdown-item>
        <el-dropdown-item
          command="default"
          :disabled="componentSize === 'default'"
          >default</el-dropdown-item
        >
        <el-dropdown-item command="small" :disabled="componentSize === 'small'"
          >small
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { useApplication } from '@/store'

const appStore = useApplication()
const componentSize = computed(() => {
  return appStore.curComponentSize
})
const handleComponentSizeChange = (size: string) => {
  appStore.setComponentSize(size)
  ElMessage.success({
    message: `change the component size to ${size} success`,
    duration: 2000,
  })
}
</script>
<style lang="scss" scoped></style>
