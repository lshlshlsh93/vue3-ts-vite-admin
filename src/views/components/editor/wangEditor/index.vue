<template>
  <div>
    <el-card class="tip module" shadow="hover">
      <template #header>⚡⚡⚡小提示⚡⚡⚡</template>
      <div class="content">
        WangEditor是基于WangEditor 封装的 markdown 编辑器组件
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
      <WangEditor
        v-model="val.value"
        :disabled="val.disabled"
        placeholder="请输入..."
      />
    </el-card>
  </div>
</template>
<script setup lang="ts">
const val = ref<{ value: any; disabled: boolean }>({
  value: '<p>hhh</p>',
  disabled: false,
})
const _cpsInfo = [
  {
    name: 'modalValue',
    type: 'string',
    default: '## hhh',
    info: '编辑器内的值',
  },
  {
    name: 'mode',
    type: 'default | simple ',
    default: 'default',
    info: '模式',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '-',
    info: '提示语',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    info: '是否禁用编辑功能',
  },
  {
    name: 'style',
    type: 'string',
    default: 'height:400px',
    info: '样式',
  },
]
</script>
<style lang="scss" scoped></style>
