<template>
  <div>
    <div>{{ msg }}</div>
    <div>
      <router-link to="/">{{ back }}</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
const msg = ref('当前页面路径不正确,请检查路径是否正确')
const back = ref('返回首页')
</script>
<style lang="scss" scoped></style>
