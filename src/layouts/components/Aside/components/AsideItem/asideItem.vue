<template>
  <el-sub-menu
    v-if="menu.children.length > 0"
    :index="menu.path"
    :key="menu.path"
  >
    <template #title>
      <svg-icon :icon="menu.meta.icon"></svg-icon>
      <span>{{ menu.meta.title }}</span>
    </template>
    <!-- 递归调用自己 -->
    <aside-item v-for="sub in menu.children" :key="sub.path" :menu="sub" />
  </el-sub-menu>
  <el-menu-item class="menu-item" v-else :index="menu.path">
    <svg-icon :icon="menu.meta.icon"></svg-icon>
    <template #title>
      {{ menu.meta.title }}
    </template>
  </el-menu-item>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
defineProps({
  menu: {
    type: Object as PropType<any>,
    required: true,
  },
})
</script>
