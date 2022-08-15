<template>
  <div>{{ message }}</div>
  <span>{{ count }}</span> <br />
  <el-button @click="count++">点我</el-button>
</template>
<script setup lang="ts">
const message = ref<string>('我是登录页面')
const count = ref(0)
</script>
<style lang="scss" scoped></style>
