<template>
  <el-popover trigger="click" :width="280">
    <template #reference>
      <svg-icon icon="icon-notification" />
    </template>
    <div class="header-box">
      <div class="header-box-title">通知</div>
      <div
        v-if="noticeList.length > 0"
        @click="handleAllRead"
        class="header-box-btn"
      >
        全部已读
      </div>
    </div>
    <div class="content-box">
      <template v-if="noticeList.length > 0">
        <div v-for="(i, k) in noticeList" :key="k" class="content-box-item">
          <div class="item-label">{{ i.label }}</div>
          <div class="item-msg">{{ i.content }}</div>
          <div class="item-time">{{ i.time }}</div>
        </div>
      </template>
      <el-empty v-else description="暂无通知"></el-empty>
    </div>
    <div
      v-if="noticeList.length > 0"
      class="footer-box"
      @click="handleNoticeLink"
    >
      全部通知
    </div>
  </el-popover>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'

interface INoticeType {
  label: string
  content: string
  time: string
  [key: string]: any
}
const noticeList = ref<INoticeType[]>([
  {
    label: 'Vue3-ts-admin publish',
    content:
      '基于Vue3、TypeScript、Vue Router4、Pinia、Axios、i18n、Element Plus、Vite2 开发的中后台管理模板',
    time: '2021-8-30',
  },
  {
    label: 'update notice',
    content: 'welcome to our community to visit our project',
    time: '2021-10-01',
  },
])
const handleAllRead = () => {
  ElMessage.success({ message: '消息全部已读', duration: 1000 })
  noticeList.value = []
}
const handleNoticeLink = () => {
  window.open('www.baidu.com')
}
</script>
<style lang="scss" scoped>
.header-box {
  display: flex;
  border-bottom: 1px solid var(--el-border-color-lighter);
  box-sizing: border-box;
  color: var(--el-text-color-primary);
  justify-content: space-between;
  height: 35px;
  align-items: center;
  .header-box-btn {
    color: var(--el-color-primary);
    font-size: 12px;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}
.content-box {
  font-size: 12px;
  .content-box-item {
    padding-top: 12px;
    &:last-of-type {
      padding-bottom: 12px;
    }
    .item-msg {
      color: var(--el-text-color-secondary);
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .item-time {
      color: var(--el-text-color-secondary);
    }
  }
}
.footer-box {
  height: 35px;
  color: var(--el-color-primary);
  font-size: 13px;
  cursor: pointer;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--el-border-color-lighter);
  &:hover {
    opacity: 1;
  }
}
</style>
