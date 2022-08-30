<template>
  <div class="logo">
    <img :src="__PROJECT_LOGO_URL" alt="logo" />
    <span v-show="isShowText">{{ __PROJECT_TITLE }}</span>
  </div>
</template>
<script setup lang="ts">
import { __PROJECT_TITLE, __PROJECT_LOGO_URL } from '@/config'
import { useApplication } from '@/store'

const appStore = useApplication()

// 是否展示标题
const isShowText = computed(() => {
  return appStore.opened
})
</script>
<style lang="scss" scoped>
.logo {
  background-color: #2b2f3a;
  height: 50px;
  border: none;
  line-height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  color: #fff;
  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
