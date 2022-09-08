<template>
  <div id="printRef">
    <el-card>
      <el-alert
        title="感谢优秀的 `print-js`,项目地址:https://github.com/crabbly/Print.js"
        type="success"
        :closable="false"
      >
      </el-alert>
      <div style="margin-top: 10px">
        <el-button size="default" type="primary" @click="handlePrintJs">
          <svg-icon icon="icon-printer" style="margin-right: 5px" />
          点击打印
        </el-button>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import printJs from 'print-js'

const handlePrintJs = () => {
  printJs({
    printable: 'printRef',
    type: 'html',
    css: [
      '//at.alicdn.com/t/font_2298093_o73r8wjdhlg.css',
      '//unpkg.com/element-plus/dist/index.css',
    ],
    scanStyles: false,
  })
}
</script>
<style lang="scss" scoped></style>
