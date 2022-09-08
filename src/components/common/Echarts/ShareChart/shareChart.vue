<template>
  <div
    class="echarts-container-share"
    ref="echartsRef"
    :style="{ height, width }"
  />
</template>
<script setup lang="ts">
import { useEchart } from '@/hooks'
import { ECOption } from '@/interface'

type RendererType = 'canvas' | 'svg'
interface IEchartProps {
  width?: string
  height?: string
  options: ECOption
  renderType?: RendererType // 解析类型
}
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
const props = withDefaults(defineProps<IEchartProps>(), {
  width: '100%',
  height: '100%',
  renderType: 'svg',
})
const echartsRef = ref<HTMLElement>()
onMounted(() => {
  // 初始化echarts实例
  const { setOptions, echartInstance } = useEchart(
    echartsRef.value!,
    props.renderType
  )
  const option = ref<ECOption>({})
  watchEffect(() => {
    option.value = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false,
      },
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '30%'],
          emphasis: {
            focus: 'self',
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)',
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012',
          },
        },
      ],
    }
    echartInstance.on('updateAxisPointer', function (event: any) {
      const xAxisInfo = event.axesInfo[0]
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1
        echartInstance.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)',
            },
            encode: {
              value: dimension,
              tooltip: dimension,
            },
          },
        })
      }
    })
    setOptions(option.value)
  })
})
</script>
<style lang="scss" scoped></style>
