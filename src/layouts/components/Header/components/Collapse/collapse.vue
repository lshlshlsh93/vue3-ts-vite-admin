<template>
  <div id="collapse" class="collapse">
    <!-- <el-icon>
      <component :is="status ? Expand : Fold" />
    </el-icon> -->
    <span v-if="status" class="icon" @click="handleClickColllapse">
      <svg-icon icon="icon-menu-1-expand" />
    </span>
    <span v-else class="icon" @click="handleClickColllapse">
      <svg-icon icon="icon-menu-1-express" />
    </span>
  </div>
</template>
<script setup lang="ts">
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
    cursor: pointer;
  }
}
</style>
