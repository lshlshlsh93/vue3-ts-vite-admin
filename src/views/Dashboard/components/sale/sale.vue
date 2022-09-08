<template>
  <el-card class="box-card" style="margin: 10px 0">
    <!-- 头部区域 -->
    <div class="clearfix">
      <!-- 左侧内容 -->
      <el-tabs class="tabs" v-model="activeName">
        <el-tab-pane
          class="hv-class"
          :label="$t('_dashboard.cart_chart.sale_amount')"
          name="sale"
        />
        <el-tab-pane
          class="hv-class"
          :label="$t('_dashboard.cart_chart.visit_amount')"
          name="visit"
        />
      </el-tabs>
      <!-- 右侧内容 -->
      <div class="right">
        <span class="hv-class" @click="handleSetDay()">
          {{ $t('_datepicker.today') }}
        </span>
        <span class="hv-class" @click="handleSetWeek()">
          {{ $t('_datepicker.week') }}
        </span>

        <span class="hv-class" @click="handleSetMonth()">
          {{ $t('_datepicker.month') }}
        </span>
        <span class="hv-class" @click="handleSetYear()">
          {{ $t('_datepicker.year') }}
        </span>
        <el-date-picker
          :clearable="false"
          :model-Value="date"
          class="date"
          value-format="YYYY-MM-DD"
          placeholder=""
          type="daterange"
          range-separator="—"
          :start-placeholder="$t('_datepicker.startDate')"
          :end-placeholder="$t('_datepicker.endDate')"
          :size="size"
        ></el-date-picker>
      </div>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="18">
          <BaseChart class="charts" :options="barChartOptions" />
        </el-col>
        <el-col :span="6" class="col-right">
          <h3 class="hv-class">
            {{ t('_dashboard.cart_chart.store') }}
            {{ activeTitle }}{{ t('_dashboard.cart_chart.ranking') }}
          </h3>
          <ul>
            <li v-for="(item, index) in saleDataList" :key="index">
              <span :class="item.index <= 4 ? 'r-index' : 'r-other-index'">{{
                item.index
              }}</span>
              <span
                class="hv-class"
                :class="
                  item.index <= 4 ? ' r-other-name r-medium-1' : 'r-medium-2'
                "
                >{{ item.name }}</span
              >
              <span class="r-value hv-class">{{ item.count }}</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ECOption } from '@/interface'
import { IDataType } from './data'
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const saleDataList: IDataType[] = [
  {
    index: 1,
    name: t('_dashboard.food_ranking.KFC'),
    count: '323,234',
  },
  {
    index: 2,
    name: t('_dashboard.food_ranking.Mcdonald'),
    count: '299,132',
  },
  {
    index: 3,
    name: t('_dashboard.food_ranking.Milky_Tea'),
    count: '283,998',
  },
  {
    index: 4,
    name: t('_dashboard.food_ranking.h_d_l'),
    count: '266,323',
  },
  {
    index: 5,
    name: t('_dashboard.food_ranking.tk_yr'),
    count: '223,445',
  },
  {
    index: 6,
    name: t('_dashboard.food_ranking.m_r'),
    count: '219,663',
  },
  {
    index: 7,
    name: t('_dashboard.food_ranking.f_c'),
    count: '200,997',
  },
]

// 日期选择器的大小
const size = ref<'' | 'large' | 'small'>('small')

// 当前激活的tab选项
const activeName = ref<string>('sale')
// 当前选中的tab标题
const activeTitle = computed(() => {
  return activeName.value === 'sale'
    ? t('_dashboard.cart_chart.sale_amount') + ' '
    : t('_dashboard.cart_chart.visit_amount') + ' '
})
// 选取的日期
//@ts-ignore
const date = ref<any[]>([])

let barChartOptions = ref<ECOption>({})
// 点击今日
const handleSetDay = () => {
  const day = dayjs().format('YYYY-MM-DD')
  date.value = [day, day]
}
// 点击本周
const handleSetWeek = () => {
  const startWeek = dayjs().day(1).format('YYYY-MM-DD')
  const endWeek = dayjs().day(7).format('YYYY-MM-DD')
  date.value = [startWeek, endWeek]
}

// 点击本月
const handleSetMonth = () => {
  const startMonth = dayjs().startOf('month').format('YYYY-MM-DD')
  const endMonth = dayjs().endOf('month').format('YYYY-MM-DD')
  date.value = [startMonth, endMonth]
}

// 点击本年
const handleSetYear = () => {
  const startYear = dayjs().startOf('year').format('YYYY-MM-DD')
  const endYear = dayjs().endOf('year').format('YYYY-MM-DD')
  date.value = [startYear, endYear]
}
watchEffect(() => {
  // 图表配置选项
  barChartOptions.value = {
    title: {
      // 响应式修改标题
      text: activeTitle.value + ' ' + t('_dashboard.cart_chart.tendency'),
    },
    xAxis: {
      type: 'category',
      data: [
        t('_datepicker.months.jan'),
        t('_datepicker.months.feb'),
        t('_datepicker.months.mar'),
        t('_datepicker.months.apr'),
        t('_datepicker.months.may'),
        t('_datepicker.months.jul'),
        t('_datepicker.months.jun'),
        t('_datepicker.months.aug'),
        t('_datepicker.months.sep'),
        t('_datepicker.months.oct'),
        t('_datepicker.months.nov'),
        t('_datepicker.months.dec'),
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        // 柱体宽度
        barWidth: '40%',
        data: [100, 520, 130, 330, 550, 880, 220, 660, 85, 770, 580, 110],
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
  }
})
</script>
<style lang="scss" scoped>
.clearfix {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.tabs {
  width: 100%;
}

.right {
  position: absolute;
  right: 0;

  span {
    margin: 0 10px;
  }
}

.hv-class {
  &:hover {
    cursor: pointer;
    color: var(--el-color-primary);
  }
}

.charts {
  width: 100%;
  height: 300px;
}

.date {
  width: 200px;
  margin-top: 10px;
}

.col-right {
  padding: 0 0;
}

ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0;

  li {
    height: 8%;
    margin: 10px 0;
  }
}

.r-index {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 10%;
  background: black;
  color: white;
  text-align: center;
}

.r-other-index {
  margin-left: 5px;
}

.r-other-name {
  margin-left: 45px;
}

.r-medium-1 {
  margin-left: 75px;
}

.r-medium-2 {
  margin-left: 82px;
}

.r-value {
  float: right;
}
</style>
