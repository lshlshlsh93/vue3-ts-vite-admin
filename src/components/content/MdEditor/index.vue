<template>
  <div>
    <v-md-editor
      :model-value="props.modelValue"
      :height="props.height"
      @change="handleChange"
    ></v-md-editor>
  </div>
</template>
<script setup lang="ts">
import VMdEditor from '@kangc/v-md-editor'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// highlightjs
import hljs from 'highlight.js'

VMdEditor.use(githubTheme, {
  Hljs: hljs,
})

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: '400px',
  },
})

// 编辑器change事件触发
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
const handleChange = (text: string, html: string) => {
  emit('update:modelValue', text)
}
</script>
<style lang="scss" scoped></style>
