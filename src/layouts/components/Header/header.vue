<template>
  <div class="navbar-container" :class="headerClass">
    <div class="navbar-left">
      <!-- 折叠 -->
      <Collapse class="collapse" />
      <!-- 面包屑 -->
      <Breadcrumb v-if="appStore.theme.isBreadcrumb" />
    </div>
    <div class="navbar-right">
      <!-- 指导 -->
      <Driver />
      <!-- 刷新 -->
      <Refresh />

      <FullScreen />
      <Search />
      <Notice />
      <ComponentSize />
      <Language />
      <Dark />
      <a href="https://gitee.com/lshlsh666/fast-element-admin" target="_blank">
        <svg-icon icon="icon-gitee-fill-round" />
      </a>
      <Avatar />
      <Setting />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useApplication } from '@/store'
import Driver from './components/Driver/driver.vue'
import Collapse from './components/Collapse/collapse.vue'
import Avatar from './components/Avatar/avatar.vue'
import Breadcrumb from './components/BreadCrumb/breadcrumb.vue'
import Refresh from './components/Refresh/refresh.vue'
import FullScreen from './components/Fullscreen/fullScreen.vue'
import Notice from './components/Notice/notice.vue'
import ComponentSize from './components/ComponentSize/componentSize.vue'
import Setting from '../Setting/setting.vue'
import Search from './components/Search/search.vue'
import Dark from './components/Theme/dark.vue'
import Language from '@/components/content/lang/lang.vue'
const appStore = useApplication()
const headerClass = computed(() =>
  appStore.theme.headerStyle === 'theme' ? 'header-theme' : ''
)
</script>
<style lang="scss" scoped>
.navbar-container {
  height: var(--theme-header-height);
  background: var(--theme-header-bg-color);
  display: flex;
  align-items: center;
  color: var(--theme-header-text-color);
  border-bottom: 1px solid var(--theme-border-color-light);
  ::v-deep(.svg-icon) {
    align-items: center;
    cursor: pointer;
    height: var(--theme-header-height);
    line-height: var(--theme-header-height);
    padding: 0 12px;
    svg {
      color: var(--theme-header-text-color) !important;
      font-size: 16px;
    }
    &:hover {
      background: var(--theme-header-hover-color);
    }
  }
  .navbar-left {
    flex: 1;
    height: inherit;
    display: flex;
    align-items: center;
    .collapse {
      margin-left: 0;
    }
  }
  .navbar-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &-ink {
      height: 100%;
      display: flex;
      align-items: center;
      white-space: nowrap;
      &-photo {
        width: 25px;
        height: 25px;
        border-radius: 100%;
      }
    }
  }
}
</style>
