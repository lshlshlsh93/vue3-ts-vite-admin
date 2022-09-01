<template>
  <div class="setting-tag-select">
    <span class="title">{{ props.title }}</span>
    <el-select
      :model-value="props.modelValue"
      :size="'small'"
      style="width: 100px"
      :disabled="props.disabled"
      @change="handleChange($event)"
    >
      <el-option
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></el-option>
    </el-select>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<any[]>,
    required: true,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: any): void
  (event: 'change'): void
}>()

const handleChange = (val: any) => {
  emit('update:modelValue', val)
  emit('change')
}
</script>
<style lang="scss" scoped>
.setting-tag-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--el-text-color-primary);
}
</style>
