<template>
  <div class="sidebar-logo" v-if="appStore.sidebarOpened">
    <img :src="__PROJECT_LOGO_URL" />
    <span class="logo-title">{{ __PROJECT_TITLE }}</span>
  </div>
  <div v-else class="sidebar-logo sidebar-logo-expend">
    <span>{{ __PROJECT_MINI_TITLE }}</span>
  </div>
</template>
<script setup lang="ts">
import {
  __PROJECT_TITLE,
  __PROJECT_LOGO_URL,
  __PROJECT_MINI_TITLE,
} from '@/config'
import { useApplication } from '@/store'
const appStore = useApplication()
</script>
<style lang="scss" scoped>
.sidebar-logo {
  margin-top: 10px;
  width: var(--theme-aside-width) !important;
  height: var(--theme-header-height);
  line-height: var(--theme-header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
  color: var(--theme-logo-text-color);
  font-size: 18px;
  img {
    width: 25px;
    height: 25px;
  }
  .logo-title {
    margin-left: 10px;
  }
}
.sidebar-logo-expend {
  width: 100% !important;
}
</style>
