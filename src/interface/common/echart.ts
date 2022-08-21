import { ComposeOption } from 'echarts/core'
import type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
} from 'echarts/charts'
import {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from 'echarts/components'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | PieSeriesOption
>
