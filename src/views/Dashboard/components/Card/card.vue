<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail
            :title="detailProps[0].title"
            :count="'￥' + detailProps[0].count"
          >
            <template #charts>
              <span
                >{{ $t('_dashboard.cart_chart.week_increase') }}
                {{ detailProps[0].content?.weekPercentage }}%
              </span>
              &nbsp;&nbsp;
              <span
                >{{ t('_dashboard.cart_chart.day_increase') }}&nbsp;&nbsp;{{
                  detailProps[0].content?.dayPercentage
                }}%
              </span>
            </template>
            <template #footer>
              <span
                >{{
                  t('_dashboard.cart_chart.day_sale_amount')
                }}&nbsp;&nbsp;￥{{ detailProps[0].daySaltAmount }}</span
              >
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail
            :title="detailProps[1].title"
            :count="'' + detailProps[1].count"
          >
            <template #charts>
              <BaseChart :options="lineChartOption" />
            </template>
            <template #footer>
              <span
                >{{ t('_dashboard.cart_chart.day_visit_amount') }}&nbsp;&nbsp;{{
                  detailProps[1].dayMeetAmount
                }}</span
              >
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail
            :title="detailProps[2].title"
            :count="detailProps[2].count + ''"
          >
            <!-- 柱状图 -->
            <template #charts>
              <BaseChart :options="barChartOption" />
            </template>
            <template #footer>
              <span>
                {{
                  t('_dashboard.cart_chart.percent_conversion')
                }}&nbsp;&nbsp;{{ detailProps[2].transformRate }}%</span
              >
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail
            :title="detailProps[3].title"
            :count="detailProps[3].count + '%'"
          >
            <!-- 进度条图 -->
            <template #charts>
              <BaseChart :options="progressChartOption" />
            </template>
            <template #footer>
              <span>
                {{ t('_dashboard.cart_chart.week_increase') }}&nbsp;&nbsp;{{
                  detailProps[3].content?.weekPercentage
                }}%</span
              >&nbsp;&nbsp;
              <span>
                {{ t('_dashboard.cart_chart.day_increase') }}
                &nbsp;&nbsp;{{ detailProps[3].content?.dayPercentage }}%</span
              >
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import Detail from './detail.vue'
import { ECOption } from '@/interface'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface IDetailProp {
  title: string
  count: number
  content?: {
    weekPercentage?: number
    dayPercentage?: number
  }
  daySaltAmount?: number
  dayMeetAmount?: number
  transformRate?: number
}
const detailProps: IDetailProp[] = [
  {
    title: t('_dashboard.cart_chart.total_sales'),
    count: 12656,
    content: {
      weekPercentage: 56.67,
      dayPercentage: 19.99,
    },
    daySaltAmount: 12423,
  },
  {
    title: t('_dashboard.cart_chart.visit_amount'),
    count: 88460,
    dayMeetAmount: 6666,
  },
  {
    title: t('_dashboard.cart_chart.payment_amount'),
    count: 88460,
    transformRate: 65,
  },
  {
    title: t('_dashboard.cart_chart.option_activity_effect'),
    count: 78,
    content: {
      weekPercentage: 12,
      dayPercentage: 11,
    },
  },
]

// 折线图配置项
let lineChartOption = ref<ECOption>({})

// 柱状图配置项
let barChartOption = ref<ECOption>({})
// 进度条
let progressChartOption = ref<ECOption>({})
watchEffect(() => {
  lineChartOption.value = {
    xAxis: {
      // 隐藏x轴
      show: false,
      type: 'category',
    },
    yAxis: {
      // 隐藏y轴
      show: false,
      type: 'value',
    },
    series: [
      {
        // 图表类型
        type: 'line',
        // 数据
        data: [700, 330, 120, 480, 1000, 90, 290, 100, 440, 880, 550, 654],
        // 平滑显示
        smooth: true,
        // 折线样式
        lineStyle: {
          color: 'purple',
        },
        // 区域填充样式
        areaStyle: {
          // 线性渐变
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'purple', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#fff', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        // 拐点样式
        itemStyle: {
          opacity: 0,
        },
      },
    ],
    // 提示信息
    tooltip: {},
    // 布局
    grid: {
      left: 0,
      top: 0,
      bottom: 0,
    },
  }
  barChartOption.value = {
    xAxis: { show: false, type: 'category' },
    yAxis: { show: false, type: 'value' },
    series: [
      {
        // 图表类型
        type: 'bar',
        // 数据
        data: [10, 7, 33, 12, 48, 9, 29, 10, 44, 88, 55, 66],
      },
    ],
    // 提示信息
    tooltip: {},
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  }
  progressChartOption.value = {
    xAxis: {
      show: false, // 隐藏x轴
      min: 0, // 最小值与最大值
      max: 100,
    },
    yAxis: {
      show: false, // 隐藏y轴
      type: 'category', // 均分
    },
    series: [
      {
        type: 'bar',
        color: 'cyan',
        data: [78],
        // 柱状图宽度
        barWidth: 10,
        // 背景颜色设置
        showBackground: true,
        backgroundStyle: {
          color: '#eee',
        },
        // label
        label: {
          show: true,
          formatter: '|',
          position: 'right',
        },
      },
    ],
  }
})
</script>
<style lang="scss" scoped></style>
