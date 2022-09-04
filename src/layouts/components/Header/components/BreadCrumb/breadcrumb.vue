<template>
  <el-breadcrumb separator="⚡" class="navbar-breadcrumb">
    <el-breadcrumb-item key="dashboard"> 首页 </el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
      <span>{{ item }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

// 定义面包屑导航数据
const breadcrumb = computed(() => route.meta.breadcrumb)
</script>
<style lang="scss" scoped>
.navbar-breadcrumb {
  ::v-deep(.el-breadcrumb__inner) {
    color: var(--theme-header-text-color) !important;
  }
  padding-left: 10px;
}
</style>
