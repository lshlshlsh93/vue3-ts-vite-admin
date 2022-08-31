<template>
  <div class="sidebar-logo" v-if="appStore.sidebarOpened">
    <svg-icon class="icon" icon="icon-vue" />
    <span class="title">{{ __PROJECT_TITLE }}</span>
  </div>
  <div v-else class="sidebar-logo sidebar-logo-expend">
    <svg-icon icon="icon-vue" />
  </div>
</template>
<script setup lang="ts">
import {
  __PROJECT_TITLE
} from '@/config'
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
  }
  .title {
    font-size: 16px;
    font-weight: 400;
    color: darkslategray;
  }
}
.sidebar-logo-expend {
  width: 100% !important;
}
</style>
