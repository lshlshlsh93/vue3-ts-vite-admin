<template>
  <div class="navbar-settings">
    <svg-icon icon="icon-setting" @click="isVisible = true" />
    <el-drawer
      v-model="isVisible"
      :title="t('_theme_setting.layout_settings')"
      :destroy-on-close="true"
      :size="280"
    >
      <el-scrollbar class="setting-container">
        <el-space direction="vertical" alignment="flex-start">
          <el-space>
            <!-- 暗色侧边栏配置 -->
            <el-tooltip
              key="dark"
              effect="dark"
              :content="t('_theme_setting.dark_sidebar')"
              placement="top"
            >
              <div
                class="setting-box-item item-left-dark"
                :class="d_t.sidebarStyle === 'dark' ? 'active' : ''"
                @click="handleSetSideBarTheme('dark')"
              ></div>
            </el-tooltip>
            <!-- 亮色侧边栏配置 -->
            <el-tooltip
              key="dark"
              effect="dark"
              :content="t('_theme_setting.light_sidebar')"
              placement="top"
            >
              <div
                class="setting-box-item item-left-light"
                :class="d_t.sidebarStyle === 'light' ? 'active' : ''"
                @click="handleSetSideBarTheme('light')"
              ></div>
            </el-tooltip>
          </el-space>
          <el-space>
            <!-- 亮色顶栏配置 -->
            <el-tooltip
              key="light"
              effect="dark"
              :content="t('_theme_setting.light_navbar')"
              placement="top"
            >
              <div
                class="setting-box-item item-top-light"
                :class="d_t.headerStyle === 'light' ? 'active' : ''"
                @click="handleSetHeaderTheme('light')"
              ></div>
            </el-tooltip>
            <!-- 主题色顶栏配置 -->
            <el-tooltip
              key="auto"
              effect="dark"
              :content="t('_theme_setting.theme_navbar')"
              placement="top"
            >
              <div
                class="setting-box-item item-top-theme"
                :class="d_t.headerStyle === 'theme' ? 'active' : ''"
                @click="handleSetHeaderTheme('theme')"
              ></div>
            </el-tooltip>
          </el-space>
          <!-- 主题色 -->
          <el-space :size="2" wrap>
            <div v-for="color in colors" :key="color">
              <span
                class="theme-color"
                :class="d_t.primaryColor === color ? 'active' : ''"
                :style="`background-color:${color}`"
                @click="handleSetThemeColor(color)"
              />
            </div>
          </el-space>
        </el-space>

        <el-divider content-position="left">{{
          $t('_theme_setting.interface_settings')
        }}</el-divider>

        <switch-item
          v-model="isDark"
          :title="t('_theme_setting.enable_dark')"
        />
        <switch-item
          v-model="d_t.uniqueOpened"
          :title="t('_theme_setting.unique_opened')"
          @change="handleSetOtherTheme()"
        />
        <switch-item
          v-model="d_t.isLogo"
          :title="t('_theme_setting.enable_logo')"
          @change="handleSetOtherTheme"
        />
        <switch-item
          v-model="d_t.isBreadcrumb"
          :title="t('_theme_setting.unique_opened')"
          @change="handleSetOtherTheme"
        />
        <switch-item
          v-model="d_t.isTabsView"
          :title="t('_theme_setting.enable_tabs')"
          @change="handleSetOtherTheme"
        />
        <switch-item
          v-model="d_t.isTabsCache"
          :title="t('_theme_setting.enable_tabs_cache')"
          @change="handleSetOtherTheme"
        />

        <SelectItem
          v-model="d_t.tabsStyle"
          :title="t('_theme_setting.tabs_style')"
          :options="tabsStyle"
          @change="handleSetOtherTheme"
        />
        <el-divider />

        <el-space direction="vertical">
          <el-alert
            type="warning"
            :title="t('_theme_setting.tips')"
            :closable="false"
          ></el-alert>
          <div class="config-btn">
            <el-button
              type="primary"
              size="small"
              :icon="CopyDocument"
              @click="handleCopyConfig"
              >{{ $t('_theme_setting.copy_config') }}</el-button
            >
            <el-button
              type="info"
              size="small"
              :icon="RefreshRight"
              @click="handleResetConfig"
            >
              {{ $t('_theme_setting.restore') }}
            </el-button>
          </div>
        </el-space>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>
<script setup lang="ts">
import { CopyDocument, RefreshRight } from '@element-plus/icons-vue'
import { useApplication } from '@/store'
import SwitchItem from './components/switchItem/switchItem.vue'
import SelectItem from './components/selectItem/selectItem.vue'
import { useClipboard, useDark, useToggle } from '@vueuse/core'
import { AppCache } from '@/utils'
import { handleThemeStyle } from '@/hooks'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const appStore = useApplication()
const { copy } = useClipboard()

const colors: string[] = [
  '#409eff',
  '#0BB2D4',
  '#3E8EF7',
  '#11C26D',
  '#17B3A3',
  '#667AFA',
  '#997B71',
  '#9463F7',
  '#757575',
  '#EB6709',
  '#F74584',
  '#FCB900',
  '#FF4C52',
]
const tabsStyle = [
  { label: t('_theme_setting.style_1'), value: 'style-1' },
  { label: t('_theme_setting.style_2'), value: 'style-2' },
]

// 默认主题
const d_t = computed(() => {
  return appStore.theme
})

// 设置侧边栏主题
const handleSetSideBarTheme = (style: string) => {
  d_t.value.sidebarStyle = style
  AppCache.setTheme(d_t.value)
}

// 设置头部主题
const handleSetHeaderTheme = (style: string) => {
  d_t.value.headerStyle = style
  AppCache.setTheme(d_t.value)
}

// 设置暗黑模式
const isDark = useDark()
const toggle = useToggle(isDark)

// 设置其他主题
const handleSetOtherTheme = () => {
  AppCache.setTheme(d_t.value)
}

// 处理主题色
const handleSetThemeColor = (color: string) => {
  d_t.value.primaryColor = color
  AppCache.setTheme(d_t.value)

  //处理设置主题色
  handleThemeStyle(d_t.value)
}

// 是否展示设置卡片
const isVisible = ref(false)

// 处理复制配置
const handleCopyConfig = (): void => {
  const config: string = JSON.stringify(d_t.value, null, 2)
  copy(config)
  ElMessage.success(t('_theme_setting.copy_success'))
}
// 处理恢复默认
const handleResetConfig = async () => {
  await AppCache.removeTheme()
  window.location.reload()
}
</script>
<style lang="scss" scoped>
.navbar-settings {
  ::v-deep(.el-drawer) {
    --el-drawer-padding-primary: unset !important;
  }
}
.setting-container {
  padding: 15px;
  color: #666666;
  .setting-box-item {
    position: relative;
    width: 50px;
    height: 35px;
    margin: 0 20px 20px 0;
    background-color: rgb(240, 242, 245);
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    &.active {
      &::after {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--el-color-primary);
        position: absolute;
        left: 50%;
        bottom: -15px;
      }
    }
  }
  // 亮色侧边栏
  .item-left-light {
    ::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 33%;
      height: 100%;
      background-color: #fff;
      content: '';
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
  // 暗色侧边栏
  .item-left-dark {
    ::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 33%;
      height: 100%;
      background-color: #000;
      content: '';
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
  // 亮色顶栏
  .item-top-light {
    ::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 33%;
      background-color: #fff;
      content: '';
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
  // 主题色顶栏
  .item-top-theme {
    ::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 33%;
      background-color: var(--el-color-primary);
      content: '';
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }

  // 主题色
  .theme-color {
    width: 20px;
    height: 20px;
    margin: 8px 8px 0 0;
    border-radius: 2px;
    display: inline-block;
    vertical-align: top;
    position: relative;
    cursor: pointer;
    &.active {
      &::after {
        content: url('data:image/svg+xml;charset=utf-8,<svg width="14" height="14" color="rgb(255 255 255)" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z"></path></svg>');
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -7px 0 0 -7px;
        font-size: 14px;
        color: #ffffff;
      }
    }
  }
  .config-btn {
    button {
      width: 100%;
      margin-top: 10px;
    }
    .el-button + .el-button {
      margin-left: 0;
    }
  }
}
</style>
