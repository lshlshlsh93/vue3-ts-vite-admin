<template>
  <el-card head="二维码生成">
    <el-form label-position="left" label-width="100px">
      <el-form-item label="来源">
        <el-alert
          title="感谢优秀的 `qrcode.vue`,项目地址:https://github.com/scopewu/qrcode.vue"
          type="success"
          :closable="false"
        >
        </el-alert>
      </el-form-item>
      <el-form-item label="文本">
        <el-input v-model="value" />
      </el-form-item>
      <el-form-item label="大小">
        <el-input-number v-model="size" :min="100" :max="400" />
      </el-form-item>
      <el-form-item label="颜色">
        <el-color-picker v-model="color" />
      </el-form-item>
      <el-form-item label="二维码">
        <qrcode-vue :value="value" :size="size" :foreground="color" level="H" />
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
const value = ref('https://www.baidu.com')
const size = ref(150)
const color = ref('#000')
</script>
<style lang="scss" scoped></style>
