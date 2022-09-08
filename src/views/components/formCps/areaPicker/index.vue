<template>
  <div class="page-container">
    <el-card class="tip module" shadow="hover">
      <template #header>⚡⚡⚡小提示⚡⚡⚡</template>
      <div class="content">
        省市区选择器是基于element-plus的级联选择器进行的二次封装
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
    <el-card class="module" shadow="hover">
      <template #header>1.基础使用⚡(数据回显：基于v-model动态绑定) </template>
      <div class="content">
        <AreaPicker v-model="_value" />
        <div v-show="_value" class="content-value">回显结果：{{ _value }}</div>
      </div>
    </el-card>
    <el-card class="module" shadow="hover">
      <template #header
        >2.数据格式化⚡(数据回显：基于v-model动态绑定)
      </template>
      <div class="content">
        <AreaPicker v-model="_value" />
        <div v-show="_value" class="content-value">
          回显结果：{{ _formatValue }}
        </div>
      </div>
    </el-card>
    <el-card class="module" shadow="hover">
      <template #header>可选项控制⚡</template>
      <div class="content">
        <el-row>
          <el-col :span="12">
            <div class="content-item">
              <div class="title">通过城市名字筛选:filter-city="上海市"</div>
              <AreaPicker filter-city="上海市" /></div
          ></el-col>
          <el-col :span="12">
            <div class="content-item">
              <div class="title">通过城市code筛选:filter-city="410000"</div>
              <AreaPicker filter-city="410000" />
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import AreaPicker from '@/components/common/AreaPicker/AreaPicker.vue'
import { handleFormatArea } from '@/utils'
const _cpsInfo = [
  {
    name: 'modalValue',
    type: 'string | number | { label: string; value: string }[] ',
    default: '-',
    info: '省市区的一个值',
  },
  {
    name: 'filterCity',
    type: 'string | number',
    default: '-',
    info: '筛选的字段,可以传入对应的名字或者代号code',
  },
  {
    name: 'otherOption',
    type: 'any',
    default: '-',
    info: 'el-ascader 的配置选项',
  },
]
// 基础使用
const _value = ref()
// 数据格式化
const _formatValue = computed(() => {
  return handleFormatArea({
    area: _value.value,
  })
})
</script>
<style lang="scss" scoped>
.module {
  margin-bottom: 20px;
}
.field-info {
  margin-top: 10px;
}

.content-value {
  font-size: 14px;
  margin-top: 10px;
  color: #999999;
}
.content-item {
  .content-item {
    margin-bottom: 30px;
    .title {
      margin-bottom: 10px;
    }
  }
}
</style>
