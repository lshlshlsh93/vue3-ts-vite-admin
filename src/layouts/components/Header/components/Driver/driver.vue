<template>
  <div id="guide" @click.prevent.stop="handleClickGuide">
    <el-icon>
      <!-- <Promotion /> -->
      <svg-icon icon="icon-send"/>
    </el-icon>
  </div>
</template>
<script setup lang="ts">
import { Promotion } from '@element-plus/icons-vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { StepProps } from './step'
let driver: Driver
onMounted(() => {
  driver = new Driver({
    animate: true,
    opacity: 0.75,
    padding: 10,
    allowClose: true,
    overlayClickNext: false,
    doneBtnText: 'Done',
    closeBtnText: 'Close',
    stageBackground: '#ffffff',
    nextBtnText: 'Next',
    prevBtnText: 'Previous',
  })
})
const handleClickGuide = (): void => {
  driver.defineSteps(StepProps)
  driver.start()
}
</script>
<style lang="scss" scoped></style>
