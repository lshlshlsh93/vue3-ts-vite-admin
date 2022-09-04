<template>
  <!-- 容器 -->
  <div class="base-charts">
    <div
      class="echarts-container"
      ref="echartsRef"
      :style="{ height, width }"
    />
  </div>
</template>
<script setup lang="ts">
import { useEchart } from '@/hooks'
import { ECOption } from '@/interface'

type RendererType = 'canvas' | 'svg'
interface IEchartProps {
  width?: string // 宽度
  height?: string // 高度
  options: ECOption // 配置项
  renderType?: RendererType // 解析类型
}
const props = withDefaults(defineProps<IEchartProps>(), {
  width: '100%',
  height: '100%',
  renderType: 'svg',
})
const echartsRef = ref<HTMLElement>()
onMounted(() => {
  // 初始化echarts实例
  const { setOptions } = useEchart(echartsRef.value!, props.renderType)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>
<style lang="scss" scoped></style>
