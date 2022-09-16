<template>
  <div class="page-search">
    <!-- 标题 -->
    <div class="title" v-if="props.title">{{ title }}</div>
    <!-- 数据 -->
    <div class="data-wrapper">
      <slot name="data"></slot>
    </div>
    <!-- 筛选 -->
    <div class="filter-wrapper clearfix">
      <div
        class="search-item"
        v-for="item in props.formItems"
        :key="item.field"
      >
        <div class="label">{{ item.label }}</div>
        <div class="form">
          <!-- 输入框 -->
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-input
              v-model="formData[item.field]"
              v-bind="item.otherOption"
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
            ></el-input>
          </template>

          <!-- 下拉选择 -->
          <template v-if="item.type === 'select'">
            <el-select
              v-model="formData[item.field]"
              :placeholder="item.placeholder"
              style="width: 100%"
            >
              <el-option
                v-for="option in item.option"
                v-bind="item.otherOption"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </el-select>
          </template>

          <!-- 时间选择 -->
          <template v-if="item.type === 'datepicker'">
            <el-date-picker
              v-model="formData[item.field]"
              v-bind="item.otherOption"
              style="width: 100%"
            />
          </template>

          <!-- 地址选择 -->
          <template v-if="item.type === 'areapicker'">
            <IAreaPicker
              v-model="formData[item.field]"
              :other-option="item.otherOption"
              style="width: 100%"
              :filter-city="item.otherOption?.filterCity"
            />
          </template>

          <!-- 下拉分页选择 -->
          <template v-if="item.type === 'pageselect'">
            <IPageSelect
              style="width: 100%"
              v-model="formData[item.field]"
              :placeholder="item.placeholder"
              v-bind="item.otherOption"
            />
          </template>
        </div>
      </div>
      <div class="btn-item">
        <el-button :loading="loading" type="primary" @click="handleSearch">
          搜索
        </el-button>
        <el-button :loading="loading" @click="handleReset">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IAreaPicker from '@/components/common/AreaPicker/AreaPicker.vue'
import IPageSelect from '@/components/content/pageSelect/pageSelect.vue'
import { IFormItem } from '@/interface'
import { useRoute } from 'vue-router'

const route = useRoute()

interface IProps {
  formItems?: IFormItem[]
  title?: string | boolean
  loading?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  formItems: () => [],
  loading: false,
})

const emit = defineEmits(['init', 'search'])

// 表单内容
const originFormData: any = {}
for (let item of props.formItems) {
  originFormData[item.field] = item.default || ''
}
const formData = ref({ ...originFormData })
emit('init', formData.value)

// 按钮
const handleSearch = () => {
  emit('search', formData.value)
}

// 重置
const handleReset = () => {
  formData.value = originFormData
  emit('search', originFormData)
}

const title = computed(() => {
  if (props.title) {
    return typeof props.title === 'boolean' ? route.meta.name : props.title
  }
})
</script>
<style lang="scss" scoped>
.title {
  color: #111111;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 10px;
}
.filter-wrapper {
  .button-item {
    width: 200px;
    float: left;
    padding: 10px 0;
  }
  .search-item {
    float: left;
    display: flex;
    align-items: center;
    padding: 10px 0;
    width: 340px;
    box-sizing: border-box;
    margin-right: 20px;
    .label {
      padding-right: 10px;
      font-size: 13px;
      color: #999999;
      font-weight: 600;
    }
    .form {
      flex: 1;
    }
  }
}

:deep(.filter-wrap .el-input__inner) {
  background-color: #f0f0f0;
  border: none;
  color: #111111;
  font-size: 13px;
}
:deep(.filter-wrap .el-date-editor .el-range-input) {
  background-color: transparent;
  color: #111111;
  font-size: 13px;
}
</style>
