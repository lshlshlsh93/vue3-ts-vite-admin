<template>
  <el-card :header="headerMsg">
    <el-row class="iconfont-row">
      <el-col
        v-for="(icon, key) in iconList"
        :key="key"
        class="iconfont-item"
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        :xl="2"
      >
        <div class="iconfont-warp" @click="handleCopy(icon)">
          <svg-icon :icon="icon" class-name="svg-size" />
          <p>{{ icon }}</p>
        </div>
      </el-col>
      <el-backtop :visibility-height="200" :right="100" :bottom="100" />
    </el-row>
  </el-card>
</template>
<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { getIconList } from '@/utils'
import { ElMessage } from 'element-plus'

const iconList = getIconList()
const { copy } = useClipboard()
const headerMsg = `点击图标即可复制代码,已提供的图标：${iconList.length}个`
const handleCopy = (icon: string) => {
  const svg_icon: string = `<svg-icon icon="${icon}"></svg-icon>`
  copy(svg_icon)
  ElMessage.success({
    message: '复制成功',
    duration: 1500,
  })
}
</script>
<style lang="scss" scoped>
.iconfont-warp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.iconfont-row {
  border-top: 1px solid var(--theme-border-color-light);
  border-left: 1px solid var(--theme-border-color-light);
}
.iconfont-item {
  text-align: center;
  border-right: 1px solid var(--theme-border-color-light);
  border-bottom: 1px solid var(--theme-border-color-light);
  height: 120px;
  overflow: hidden;
  display: flex;
  transition: all 0.3s ease;
  margin: auto;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    background-color: var(--el-border-color-extra-light);
  }
}
:deep(.svg-size) {
  width: 30px !important;
  height: 30px !important;
  margin-bottom: 10px;
}
</style>
