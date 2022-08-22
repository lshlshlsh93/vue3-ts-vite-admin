<template>
  <div class="navbar">
    <!-- 折叠 -->
    <Collapse />
    <Breadcrumb />
    <div class="navbar-right">
      <!-- 头像 -->
      <Driver class="navbar-item" />
      <Avatar class="navbar-item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Driver from './components/Driver/driver.vue'
import Collapse from './components/Collapse/collapse.vue'
import Avatar from './components/Avatar/avatar.vue'
import Breadcrumb from './components/BreadCrumb/breadcrumb.vue'
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    :deep(.navbar-item) {
      display: inline-block;
      margin-right: 5px;
      margin-top: 5px;
      font-size: 22px;
      box-sizing: border-box;
      cursor: pointer;
      color: #5a5e66;
    }
  }
}
</style>
