<template>
  <el-card class="box-card" style="margin: 10px 0">
    <!-- 头部区域 -->
    <div class="clearfix">
      <!-- 左侧内容 -->
      <el-tabs class="tabs" v-model="activeName">
        <el-tab-pane class="hv-class" label="销售额" name="sale" />
        <el-tab-pane class="hv-class" label="访问量" name="visit" />
      </el-tabs>
      <!-- 右侧内容 -->
      <div class="right">
        <span class="hv-class" @click="handleSetDay">今日</span>
        <span class="hv-class" @click="handleSetWeek">本周</span>
        <span class="hv-class" @click="handleSetMonth">本月</span>
        <span class="hv-class" @click="handleSetYear">本年</span>
        <el-date-picker
          :clearable="false"
          :model-Value="date"
          class="date"
          value-format="YYYY-MM-DD"
          placeholder=""
          type="daterange"
          range-separator="—"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
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
          <h3 class="hv-class">门店{{ activeTitle }}排名</h3>
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
import { saleDataList } from './data'
import dayjs from 'dayjs'

// 日期选择器的大小
const size = ref<'' | 'large' | 'small'>('small')

// 当前激活的tab选项
const activeName = ref<string>('sale')
// 当前选中的tab标题
const activeTitle = computed(() => {
  return activeName.value === 'sale' ? '销售额' : '访问量'
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
      text: activeTitle.value + '趋势',
    },
    xAxis: {
      type: 'category',
      data: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
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
  margin: 0 20px;
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
