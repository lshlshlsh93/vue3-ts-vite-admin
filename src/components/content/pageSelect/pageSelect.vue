<template>
  <div class="page-select">
    <el-popover v-model:visible="visible" placement="bottom" :width="400">
      <!-- 弹出层 -->
      <div class="popper-container">
        <div class="search-container">
          <span class="search-label">{{ moduleConfig.searchLable }}：</span>
          <el-input
            size="small"
            v-model="searchParams.search"
            placeholder="搜索关键词"
            clearable
            @clear="handleSearchByPage"
            @keyup.enter="handleSearchByPage"
          >
            <template #append>
              <el-button @click="handleSearchByPage" />
            </template>
          </el-input>
        </div>
        <div class="table-container">
          <el-table
            ref="tableRef"
            v-loading="startLoading"
            size="small"
            max-height="250"
            border
            :data="tableData"
          >
            <el-table-column width="55" align="center">
              <template #default="{ row }">
                <el-checkbox
                  :model-value="isSelect(row[moduleConfig.valueField])"
                  @change="handleSelectChange($event, row)"
                ></el-checkbox>
              </template>
            </el-table-column>
            <template
              v-for="item in moduleConfig.tableConfig"
              :key="item.field"
            >
              <el-table-column
                :property="item.field"
                :label="item.title"
                align="center"
                show-overflow-tooltip
              />
            </template>
          </el-table>
        </div>
        <div class="page-container">
          <el-pagination
            :page-size="searchParams.size"
            :current-page="searchParams.page"
            small
            background
            layout="total, prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange"
          />
        </div>
        <div class="btn-container">
          <el-button size="small" @click="visible = false">关闭</el-button>
          <el-button type="primary" size="small" @click="handleValueChange"
            >确定</el-button
          >
        </div>
      </div>
      <template #reference>
        <el-select
          v-model="selectVal"
          :placeholder="placeholder"
          style="width: 100%"
          :multiple="multiple"
          @click="handleOpenOrClose"
          popper-class="page-select-popper"
        >
          <el-option
            v-for="o in option"
            :key="o.value"
            :label="o.label"
            :value="o.value"
          ></el-option>
        </el-select>
      </template>
    </el-popover>
  </div>
</template>
<script setup lang="ts">
import { usePageSearch } from '@/hooks'
import { ElMessage, ElTable } from 'element-plus'
import module from './module'
interface IProps {
  modelValue?: string | number | string[] | number[]
  placeholder?: string
  module?: moduleType // 模块名
  multiple?: boolean // 是否多选
}
type moduleType = 'shop'

const props = withDefaults(defineProps<IProps>(), {
  placeholder: '请选择',
  module: 'shop',
  multiple: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string | number | string[] | number[]): void
  (e: 'change', value?: string | number | any[]): void
}>()

// 1. 获取对应模块的配置
const moduleConfig = module[props.module]

const {
  searchParams,
  handlePageChange,
  handleSearch,
  queryDataAction,
  startLoading,
  tableData,
  total,
} = usePageSearch({
  queryAction: moduleConfig.url,
})

searchParams.value.enable = 1

const handleCurrentChange = (e: any) => {
  handlePageChange({ page: e })
}
const handleSearchByPage = (e: any) => {
  searchParams.value.page = 1
  handleSearch(searchParams.value)
}

// 3. 下拉框显示
const selectVal = computed({
  get() {
    return props.modelValue
  },
  set(val?: string[] | number[] | string | number) {
    emit('update:modelValue', val)
  },
})
const visible = ref(false)
const option = ref<any[]>([])
const handleInitOption = (data: any[]) => {
  option.value = data.map((v) => ({
    value: v[moduleConfig.valueField],
    label: v[moduleConfig.labelField],
  }))
}
const handleOpenOrClose = () => {
  if (visible.value) {
    return (visible.value = false)
  }
  if (!tableData.value.length) {
    handleSearch(searchParams.value)
  }
  if (!props.modelValue) {
    selectData.value = []
  }
  visible.value = true
}
// 数据回显
const tableRef = ref<InstanceType<typeof ElTable>>()
onMounted(() => {
  if (props.modelValue && !option.value.length) {
    searchParams.value[moduleConfig.valueField] = props.modelValue
    queryDataAction(searchParams.value).then((res: any) => {
      handleInitOption(res.records)
      res.records.forEach((v: any) => {
        if (props.multiple && Array.isArray(props.modelValue)) {
          const value = v[moduleConfig.valueField] as never
          props.modelValue.includes(value) && selectData.value.push(v)
        } else {
          v[moduleConfig.valueField] === props.modelValue &&
            selectData.value.push(v)
        }
      })
    })
  }
})

// 4. 表格选中返回值逻辑
const selectData = ref<any[]>([])
const isSelect = (value: string | number) => {
  return (
    selectData.value.findIndex((v) => v[moduleConfig.valueField] === value) >= 0
  )
}
const handleSelectChange = (checked: any, row: any) => {
  if (checked) {
    if (props.multiple) {
      return selectData.value.push(row)
    }
    selectData.value = [row]
  } else {
    if (props.multiple) {
      const index = selectData.value.findIndex(
        (v) => v[moduleConfig.valueField] === row[moduleConfig.valueField]
      )
      return index >= 0 && selectData.value.splice(index, 1)
    }
    selectData.value = []
  }
}
// 表单项值发生变动
const handleValueChange = () => {
  // 多选
  if (props.multiple) {
    handleInitOption(selectData.value)
    emit(
      'update:modelValue',
      selectData.value.map((v: any) => v[moduleConfig.valueField])
    )
    emit('change', selectData.value)
  } else {
    // 单选
    if (selectData.value.length > 1) {
      return ElMessage.warning('请选择单个数据')
    }
    handleInitOption(selectData.value)
    emit('update:modelValue', selectData.value[0][moduleConfig.valueField])
    emit('change', selectData.value[0])
  }
  visible.value = false
}
</script>
<style lang="scss" scoped></style>
