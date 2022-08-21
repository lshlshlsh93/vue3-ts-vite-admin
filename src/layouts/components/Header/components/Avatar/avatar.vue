<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar sharp="square" :size="size" :src="DEFALUT_AVATAR_IMAGE_URL" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <router-link to="/dashboard">首页</router-link>
        </el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { DEFALUT_AVATAR_IMAGE_URL } from '../../../../../config'

import { useRouter } from 'vue-router'

const router = useRouter()
const size = ref<number>(40)
const handleLogout = (): void => {
  router.replace('/login')
}
</script>
<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
:deep(.el-dropdown-item) {
  white-space: nowrap;
}
</style>
