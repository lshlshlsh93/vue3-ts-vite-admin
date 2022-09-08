<template>
  <div>
    <el-card class="tip module" shadow="hover">
      <template #header>⚡⚡⚡小提示⚡⚡⚡</template>
      <div class="content">
        mdEditor是基于v-md-editor 封装的 markdown 编辑器组件
        <br />
        <br />
      </div>
      <el-table class="field-info" :data="_cpsInfo" border>
        <el-table-column label="props" prop="name" />
        <el-table-column label="字段类型" prop="type" width="350px" />
        <el-table-column label="默认值" width="auto" prop="default" />
        <el-table-column label="介绍" prop="info" width="350px" />
      </el-table>
    </el-card>
    <el-card>
      <MdEditor v-model="editorValue" height="500px" />
    </el-card>
  </div>
</template>
<script setup lang="ts">
const editorValue = ref('## hhh')
const _cpsInfo = [
  {
    name: 'modalValue',
    type: 'string',
    default: '## hhh',
    info: '编辑器内的值',
  },
  {
    name: 'height',
    type: 'string',
    default: '400px',
    info: '高度',
  },
]
</script>
<style lang="scss" scoped></style>
