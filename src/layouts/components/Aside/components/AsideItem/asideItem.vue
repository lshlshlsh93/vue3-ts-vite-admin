<template>
  <template v-for="item in props.menuList" :key="item.path">
    <el-sub-menu
      v-if="item.children && item > 0"
      :index="item.path"
      :key="item.path"
    >
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 递归调用自己 -->
      <aside-item :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <template #title>
        <span class="title">{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
const props = defineProps(['menuList'])
</script>
<style lang="scss" scoped>
.title {
  font-size: 14px;
  font-weight: 600;
}
</style>
