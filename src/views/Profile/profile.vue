<template>
  <el-tabs class="tabs tab" tab-position="left">
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Info">Info</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
    <el-tab-pane label="Password">
      <Password />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import Password from './password.vue'
</script>
<style lang="scss" scoped>
.tabs > .el-tabs__content {
  padding: 50px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.tab {
  background-color: var(--el-color-white);
}
.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
