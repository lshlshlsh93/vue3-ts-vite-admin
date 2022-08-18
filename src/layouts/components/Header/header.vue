<template>
  <div class="header-container">
    <span>
      <!-- 折叠 -->
      <Collapse />
    </span>
  </div>
</template>
<script setup lang="ts">
import Collapse from './components/Collapse/collapse.vue'
</script>
<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
}
</style>
