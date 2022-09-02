<template>
  <div class="setting-switch">
    <span>{{ props.title }}</span>
    <el-switch
      :model-value="modelValue"
      :disabled="props.disabled"
      :active-text="t('_bool_setting.true')"
      :inactive-text="t('_bool_setting.false')"
      inline-prompt
      @change="handleChange($event)"
    ></el-switch>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits<{
  (event: 'update:modelValue', value: any): void
  (event: 'change', val: any): void
}>()

const handleChange = (val: any) => {
  emit('update:modelValue', val)
  emit('change', val)
}
</script>
<style lang="scss" scoped>
.setting-switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  color: var(--el-text-color-primary);
}
</style>
