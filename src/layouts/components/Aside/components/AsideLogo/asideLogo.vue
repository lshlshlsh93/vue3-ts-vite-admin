<template>
  <div class="sidebar-logo" v-if="appStore.isSidebarOpened">
    <svg-icon class="icon" :icon="__AVATAR_ICON_CLASS.expand" />
    <span class="title">{{ __PROJECT_TITLE }}</span>
  </div>
  <div v-else class="sidebar-logo sidebar-logo-expend">
    <svg-icon class="icon" :icon="__AVATAR_ICON_CLASS.compress" />
  </div>
</template>
<script setup lang="ts">
import { __PROJECT_TITLE, __AVATAR_ICON_CLASS } from '@/config'
import { useApplication } from '@/store'
const appStore = useApplication()
</script>
<style lang="scss" scoped>
.sidebar-logo {
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 8px;
  width: var(--theme-aside-width) !important;
  height: var(--theme-header-height);
  line-height: var(--theme-header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
  color: var(--theme-logo-text-color);
  font-size: 18px;
  .icon {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
  .title {
    font-size: 15px;
    font-weight: 500;
    align-items: center;
    color: var(--el-color-primary);
  }
}
.sidebar-logo-expend {
  width: 100% !important;
}
</style>
