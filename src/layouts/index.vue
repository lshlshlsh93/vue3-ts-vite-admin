<template>
  <el-container class="layout-container">
    <!-- 侧边栏开始 -->
    <!-- 菜单栏 -->
    <Aside />
    <!-- 侧边栏结束 -->
    <el-container>
      <!-- 头部开始 -->
      <el-header class="layout-header" :style="layoutHeaderHeight">
        <Header />
        <!-- 当前激活 tab 面板 -->
        <Tabs v-if="curTheme.isTabsView" />
      </el-header>
      <!-- 头部结束 -->
      <el-scrollbar>
        <!-- 主体开始 -->
        <el-main class="layout-main">
          <el-scrollbar class="layout-scrollbar">
            <div class="layout-card" :style="layoutMainHeight">
              <router-view v-slot="{ Component, route }">
                <keep-alive
                  v-if="curTheme.isTabsCache"
                  :include="[...tabStore.cachedViews]"
                >
                  <component :is="Component" :key="route.name" />
                </keep-alive>
                <component :is="Component" v-else :key="route.name" />
              </router-view>
            </div>
          </el-scrollbar>
        </el-main>
        <!-- 主体结束 -->
        <!-- <el-footer> -->
        <!-- <Footer /> -->
        <!-- </el-footer> -->
      </el-scrollbar>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Footer from './components/Footer/footer.vue'
import Header from './components/Header/header.vue'
import Aside from './components/Aside/aside.vue'
import Tabs from './components/Tabs/tabs.vue'
import { RouterView } from 'vue-router'
import { useApplication, useTab } from '@/store'

const appStore = useApplication()
const tabStore = useTab()

// 当前主题
const curTheme = computed(() => appStore.theme)

// 头部高度
const layoutHeaderHeight = computed(() => {
  if (!curTheme.value.isTabsView) {
    return 'height:var(--theme-header-height) !important'
  } else {
    return ''
  }
})

// 侧边栏高度
const layoutMainHeight = computed(() => {
  if (!curTheme.value.isTabsView) {
    return 'min-height: calc(100vh - var(--theme-header-height) -30px) !important'
  } else {
    return ''
  }
})
</script>
<style lang="scss" scoped></style>
