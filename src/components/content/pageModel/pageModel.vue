<template>
  <el-dialog title="" center @close="handleClose">
    <div></div>
    <template #footer>
      <span class="dialog-footer">
        <el-button :loading="loading">取消</el-button>
        <el-button :loading="loading" type="primary" @click="handleConfirm"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { IPageFormContentConfig } from '../../../interface/common/page'

interface IProps {
  modelConfig: IPageFormContentConfig
  defaultData?: any // 默认数据
  title?: string // 标题
  primaryKey?: string // 主键
  loading?: boolean // 是否加载中
}
const props = withDefaults(defineProps<IProps>(), {
  title: '编辑',
  primaryKey: 'id',
  loading: false,
})

const emit = defineEmits<{
  (e: 'edit', value: any): void
  (e: 'add', value: any): void
}>()

const formRef = ref()
const dialogVisible = ref(false)
const formData = ref<any>({})

// 添加默认值
props.modelConfig.formItems.forEach((v) => {
  if (v.default) {
    formData.value[v.field] = v.default
  }
})

defineExpose({
  dialogVisible,
})

// 将默认值放入表单数据中
watch(
  () => props.defaultData,
  (newValue: any) => {
    for (const item of props.modelConfig.formItems) {
      formData.value[item.field] = newValue[item.field]
    }
  }
)

/**
 * 点击确认按钮
 */
const handleConfirm = () => {
  const validateForm = formRef.value?.validateForm
  if (validateForm) {
    validateForm().then(() => {
      if (props.defaultData[props.primaryKey]) {
        emit('edit', formData.value)
      } else {
        emit('add', formData.value)
      }
    })
  }
}

/**
 * 关闭对话框时重置表单数据
 */
const handleClose = () => {
  formRef.value?.resetForm()
}
</script>
<style lang="scss" scoped></style>
