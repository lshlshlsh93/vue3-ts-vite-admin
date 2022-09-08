<template>
  <div style="border: 1px solid #ccc; z-index: 100">
    <!-- 工具栏 -->
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :mode="mode"
    />
    <!-- 编辑器 -->
    <Editor
      :mode="mode"
      :model-value="modelValue"
      :style="style"
      :disabled="disabled"
      @onCreated="handleCreated"
      @onChange="handleChange"
      :default-config="editorConfig"
    />
  </div>
</template>
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor, IEditorConfig } from '@wangeditor/editor'

const props = withDefaults(
  defineProps<{
    modelValue: string
    mode?: 'default' | 'simple'
    placeholder: string
    style?: string
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    mode: 'default',
    placeholder: '',
    style: 'height:400px',
    disabled: false,
  }
)

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 编辑器配置
const editorConfig: Partial<IEditorConfig> = {
  placeholder: props.placeholder,
  readOnly: props.disabled,
  MENU_CONF: {
    uploadImage: {
      server: 'http://localhost:8080/api/upload', // 上传地址
    },
  },
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
// 编辑器change事件触发
const handleChange = (editor: IDomEditor) => {
  const str: string = editor.getHtml()
  emit('update:modelValue', str)
}
</script>
<style lang="scss" scoped></style>
