<template>
  <template v-for="item in props.menuList" :key="item.path">
    <el-sub-menu
      v-if="item.children && item > 0"
      :index="item.path"
      :key="item.path"
    >
      <template #title>
        <el-icon> </el-icon>
        <span>{{ item.meta.name }}</span>
      </template>
      <!-- 递归调用自己 -->
      <aside-item :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item class="menu-item" v-else :index="item.path">
      <template #title>
        {{ item.meta.name }}
      </template>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
  menuList: {
    type: Object as PropType<any>,
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.menu-item {
  color: #f4f5f6;
}
</style>
