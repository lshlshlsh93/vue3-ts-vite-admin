<template>
  <div class="page-container">
    <el-card :header="headMsg" class="tip module" shadow="hover">
      <template #header>小提示</template>
      <div class="content">
        1. 当前图表使用的是百度的Echarts,采用按需引入的方式
        <br />
        <br />
        2. 在 src/components/common/Echarts/base-echart.vue
        路径中,已经封装好了一个基础的Echarts组件，通过传入option可以直接实现渲染
        <br />
        <br />
        3.
        如果发现自己的图表没有渲染出来，请查看控制台是否提示有哪个内容不存在，然后去
        src/plugins/echarts/index.ts 文件里面引入
        <br />
        <br />
        4. 图表默认使用 SVG
        的方式渲染，对于小型图表效率较高，要渲染大型图表，请使用 Canvas
        的渲染方式，在使用base-echart.vue时，传入renderType="canvas"即可
        <br />
        <br />
      </div>
      <el-table :data="cpsInfo" border>
        <el-table-column label="props" prop="name"></el-table-column>
        <el-table-column label="字段类型" prop="type"></el-table-column>
        <el-table-column label="默认值" prop="default"></el-table-column>
        <el-table-column label="介绍" prop="info"></el-table-column>
      </el-table>
    </el-card>
    <el-card class="module" shadow="hover">
      <template #header>饼状图</template>
      <el-row>
        <el-col :span="11">
          <div class="content">
            <BaseChart height="500px" width="600px" :options="pieChartOption" />
          </div>
        </el-col>
        <el-col :span="11">
          <div class="content">
            <ShareChart height="500px" :options="option2" />
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="module i-bc" shadow="hover">
      <template #header>数据动态变化</template>
      <div class="content">
        <BaseChart height="200px" :options="option" />
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ECOption } from '@/interface'
import ShareChart from '@/components/common/Echarts/ShareChart/shareChart.vue'
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
let option = ref<ECOption>({})
let option2 = ref<ECOption>({})
// 柱状图配置项
let pieChartOption = ref<ECOption>({})
watchEffect(() => {
  pieChartOption.value = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015'],
        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
        ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
      ],
    },
    xAxis: [
      { type: 'category', gridIndex: 0 },
      { type: 'category', gridIndex: 1 },
    ],
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
      // These series are in the first grid.
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      // These series are in the second grid.
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    ],
  }
  option.value = {
    // backgroundColor: '#fff',
    grid: {
      top: '5%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
        },
      },
    },
    xAxis: {
      data: ['08.11', '08.12', '08.13', '08.14', '08.15'],
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: '#999',
        },
      },
      axisTick: {
        show: true, //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        color: '#999', //X轴文字颜色
      },
    },
    yAxis: [
      {
        type: 'value',
        nameTextStyle: {
          color: '#999',
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: true,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#eee',
          },
        },
        axisLabel: {
          show: true,
          color: '#999',
        },
      },
      {
        type: 'value',
        name: '同比',
        nameTextStyle: {
          color: '#999',
        },
        position: 'right',
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          formatter: '{value} %', //右侧Y轴文字显示
          color: '#999',
        },
      },
    ],
    series: [
      {
        name: '代码提交量',
        type: 'line',
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: 'circle', //标记的图形为实心圆
        symbolSize: 6, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          color: '#058cff',
        },
        lineStyle: {
          color: '#058cff',
        },
        areaStyle: {
          color: 'rgba(5,140,255, 0.2)',
        },
        data: codeData.value,
      },
      {
        name: '代码提交增长率',
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#00FFE3', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#4693EC', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: codeData.value,
      },
    ],
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
