<template>
  <el-form
    class="form"
    ref="formRef"
    :model="props.modelValue"
    :rules="formRules"
    :label-width="props.labelWidth"
    label-position="right"
  >
    <el-row>
      <el-col
        v-bind="props.colLayout"
        v-for="item in props.formItems"
        :key="item.label"
      >
        <el-form-item
          :prop="item.field"
          :label="item.label"
          style="width: 100%"
          v-if="!item.hidden"
        >
          <!-- 输入框 -->
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-input
              :model-value="props.modelValue[item.field]"
              v-bind="item.otherOption"
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              @update:model-value="handelValueChange($event, item.field)"
            />
          </template>
          <!-- 下拉选择 -->
          <template v-if="item.type === 'select'">
            <el-select
              :model-value="props.modelValue[item.field]"
              :placeholder="item.placeholder"
            >
              <el-option
                v-for="option in item.option"
                :label="option.label"
                :key="option.value"
                v-bind="item.otherOption"
                :value="option.value"
              />
            </el-select>
          </template>

          <!-- 时间选择 -->
          <template v-if="item.type === 'datepicker'">
            <el-date-picker
              v-bind="item.otherOption"
              :model-value="props.modelValue[item.field]"
              style="width: 100%"
              @update:modelValue="handelValueChange($event, item.field)"
            />
          </template>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script setup lang="ts">
import { IFormItem } from '../../../interface'
import type { ElForm } from 'element-plus'
type FormInstance = InstanceType<typeof ElForm>
interface IProps {
  formItems?: IFormItem[]
  modelValue: any
  labelWidth?: string
  colLayout?: any
}

const props = withDefaults(defineProps<IProps>(), {
  labelWidth: '120px',
  colLayout: () => ({
    xl: 6, // >1920px 4个
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
  }),
  formItems: () => [] as IFormItem[],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

// 表单验证规则
const formRef = ref<FormInstance>()
const formRules = reactive<{ [item: string]: any }>({})
props.formItems.forEach((v) => {
  if (v.rules && v.rules.length) {
    formRules[v.field] = v.rules
  }
})

// 合法验证
const validateForm = () => {
  return new Promise((resolve) => {
    formRef.value?.validate((valid) => {
      if (valid) {
        resolve('ok')
      }
    })
  })
}

defineExpose({
  validateForm,
  formRules,
})

const handelValueChange = (value: any, field: string) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value,
  })
}
</script>
<style lang="scss" scoped></style>
