<template>
  <el-dropdown class="avatar-container" trigger="hover">
    <div class="avatar-wrapper">
      <el-avatar
        id="avatar"
        sharp="circle"
        :size="__DEFALUT_AVATAR_IMAGE_SIZE"
        :src="avatarUrl"
      />
      <span>{{ userStore.curUserName }}</span>
      <el-icon class="el-icon--right">
        <ArrowDown />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu class="user-dropdown">
        <router-link to="/dashboard">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>
        <router-link to="/profile">
          <el-dropdown-item divided>个人中心</el-dropdown-item>
        </router-link>

        <el-dropdown-item divided @click="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import {
  __DEFALUT_AVATAR_IMAGE_URL,
  __DEFALUT_AVATAR_IMAGE_SIZE,
} from '@/config'
import { useUser } from '@/store'
import { useRouter } from 'vue-router'

const userStore = useUser()
const router = useRouter()

// 头像地址
const avatarUrl = computed(() => {
  return userStore.curUserAvatar
    ? userStore.curUserAvatar
    : __DEFALUT_AVATAR_IMAGE_URL
})

const handleLogout = (): void => {
  userStore.logoutAction()
  router.push({
    path: '/login',
  })
}
</script>
<style lang="scss" scoped>
.avatar-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  .avatar-wrapper {
    display: flex;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
    padding: 0 8px;
    color: var(--el-color-primary);
    span {
      margin-left: 6px;
    }
  }
}
:deep(.el-dropdown-item) {
  white-space: nowrap;
}
</style>
