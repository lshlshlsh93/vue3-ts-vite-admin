import echarts from '@/plugins/echarts/index'
import { ECOption } from '@/interface'

type RendererType = 'canvas' | 'svg'

export function useEchart(el: HTMLElement, renderType: RendererType = 'svg') {
  // 创建echarts实例
  const echartInstance = echarts.init(el, undefined, {
    renderer: renderType,
  })

  const setOptions = (options: ECOption) => {
    echartInstance.setOption(options)
  }

  const setResize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    setResize,
  }
}
