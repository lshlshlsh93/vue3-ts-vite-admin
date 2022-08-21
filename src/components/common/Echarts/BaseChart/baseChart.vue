<template>
  <!-- 容器 -->
  <div class="charts" ref="echartsRef"></div>
</template>
<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue'
import { useEchart } from '@/hooks'
import { ECOption } from '@/interface'

type RendererType = 'canvas' | 'svg'
interface IProps {
  // 宽度
  width?: string
  // 高度
  height?: string
  // 配置项
  options: ECOption
  // 解析类型
  renderType?: RendererType
}
const props = withDefaults(defineProps<IProps>(), {
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
<style lang="scss" scoped>
.charts {
  height: 100%;
  width: 100%;
}
</style>
