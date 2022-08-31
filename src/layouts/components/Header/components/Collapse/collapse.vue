<template>
  <div id="collapse" class="collapse">
    <el-icon @click="handleClickColllapse" class="icon">
      <component :is="status ? Expand : Fold" />
    </el-icon>
  </div>
</template>
<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue'
import { useApplication } from '@/store'

const appStore = useApplication()

const status = computed(() => {
  return appStore.isSidebarOpened
})
const handleClickColllapse: () => void = () => {
  appStore.setSidebarOpened()
}
</script>
<style lang="scss" scoped>
.collapse {
  .icon {
    display: flex;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    margin-right: 15px;
  }
}
</style>
