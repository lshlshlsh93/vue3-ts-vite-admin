<template>
  <el-form
    :model="modelValue"
    :rules="formRules"
    ref="formRef"
    :label-width="labelWidth"
    label-position="right"
  >
    <el-row>
      <el-col v-bind="colLayout" v-for="item in formItems" :key="item.label">
        <el-form-item
          :prop="item.field"
          :label="item.label"
          style="width: 100%"
          v-if="!item.hidden"
        >
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-input
              :model-value="modelValue[item.field]"
              v-bind="item.otherOption"
              :placeholder="item.placeholder"
              :show-password="item.type === 'password'"
              @update:model-value="handleValueChange($event, item.field)"
            ></el-input>
          </template>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script lang="ts">
import { IFormItem } from '@/interface'
import type { ElForm } from 'element-plus'
import { PropType } from 'vue'
import AreaPicker from '@/components/common/AreaPicker/AreaPicker.vue'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => [],
    },
    modelValue: {
      type: Object,
      default: () => {},
    },
    labelWidth: {
      type: String,
      default: '120px',
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  components: { AreaPicker },
  setup(props, { emit }) {
    type FormInstance = InstanceType<typeof ElForm>

    // 表单校验规则
    const formRef = ref<FormInstance>()
    const formRules = reactive<{
      [item: string]: any
    }>({})
    props.formItems.forEach((v: any) => {
      if (v.rules && v.rules.length) {
        formRules[v.field] = v.rules
      }
    })

    // 校验表单
    const validateForm = () => {
      return new Promise((resolve) => {
        formRef.value?.validate((valid) => {
          if (valid) {
            resolve('ok')
          }
        })
      })
    }

    // 清除表单校验
    const resetForm = () => {
      formRef.value?.resetFields()
    }

    // 表单项值发生变动
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }

    return {
      formRef,
      formRules,
      handleValueChange,
      validateForm,
      resetForm,
    }
  },
})
</script>
<style lang="scss" scoped></style>
