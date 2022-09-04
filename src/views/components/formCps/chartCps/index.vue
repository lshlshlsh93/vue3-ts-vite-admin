<template>
  <div class="page-container">
    <el-card :header="headMsg" class="tip module" shadow="hover">
      <template #header>小提示</template>
      <div class="content">
        1. 当前图表使用的是百度的Echarts，使用按需引入的方式
        <br />
        2. 在 src/components/common/Echarts/base-echart.vue
        路径中，已经封装好了一个基础的Echarts组件，通过传入option可以直接实现渲染
        <br />
        3.
        如果发现自己的图表没有渲染出来，请查看控制台是否提示有哪个内容不存在，然后去
        src/plugins/echarts/index.ts 文件里面引入
        <br />
        4. 图表默认使用 SVG
        的方式渲染，对于小型图表效率较高，要渲染大型图表，请使用 Canvas
        的渲染方式，在使用base-echart.vue时，传入renderType="canvas"即可
      </div>
      <el-table :data="cpsInfo" border>
        <el-table-column label="props" prop="name"></el-table-column>
        <el-table-column label="字段类型" prop="type"></el-table-column>
        <el-table-column label="默认值" prop="default"></el-table-column>
        <el-table-column label="介绍" prop="info"></el-table-column>
      </el-table>
    </el-card>
    <el-card class="module" shadow="hover">
      <template #header>数据动态变化</template>
      <div class="content">
        <BaseChart height="200px" :options="pieChartOption" />
      </div>
    </el-card>
    <el-card class="module" shadow="hover">
      <template #header>数据动态变化</template>
      <div class="content">
        <BaseChart height="200px" :options="pieChartOption" />
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ECOption } from '@/interface'
const headMsg = '图表'
const cpsInfo = [
  { name: 'height', type: 'string', default: '100%', info: '高度' },
  { name: 'width', type: 'string', default: '100%', info: '宽度' },
  {
    name: 'renderType',
    type: "'canvas' | 'svg'",
    default: 'svg',
    info: '渲染类型',
  },
  {
    name: 'options',
    type: 'ECOption',
    default: '必传',
    info: '图表渲染项，请上官网查看',
  },
]
const codeData = ref([393, 438, 485, 631, 689])
const timer = setInterval(() => {
  let arr = []
  for (let i = 0; i < 5; i++) {
    const value = Math.floor(20 + Math.random() * 300)
    arr.push(value)
  }
  codeData.value = arr
}, 5000)

onBeforeUnmount(() => {
  clearInterval(timer)
})
// 柱状图配置项
let pieChartOption = ref<ECOption>({})
watchEffect(() => {
  pieChartOption.value = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    xAxis: {
      show: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
    grid: {},
  }
})
</script>
<style lang="scss" scoped>
.module {
  margin-bottom: 20px;
}
.tip .content {
  color: #999999;
  font-size: 14px;
  line-height: 24px;
}
</style>
