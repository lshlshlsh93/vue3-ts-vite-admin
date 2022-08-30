<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside width="auto" class="aside-container">
      <!-- 菜单栏 -->
      <Aside />
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header class="header-container">
        <Header />
      </el-header>
      <!-- 主体 -->
      <el-main class="main-container">
        <!-- 当前激活 tab 面板 -->
        <Tabs />
        <!-- 路由出口 -->
        <router-view />
      </el-main>
      <!-- <el-footer>
        <Footer />
      </el-footer> -->
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Footer from './components/Footer/footer.vue'
import Header from './components/Header/header.vue'
import Aside from './components/Aside/aside.vue'
import Tabs from './components/Tabs/tabs.vue'
</script>
<style lang="scss" scoped>
.layout-container {
  height: 100%;
  .aside-container {
    // #304156
    background-color: rgb(48, 65, 86);
  }
  .header-container {
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
  }
  .main-container {
    margin-top: 0;
  }
}
</style>
