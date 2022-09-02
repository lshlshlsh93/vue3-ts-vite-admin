import { createApp } from 'vue'

import 'virtual:svg-icons-register'

import '@/styles/scss/index.scss'
import '@/assets/iconfont/iconfont'

// 移动端适配
// import '@/utils/common/device/flexable.ts'

// 暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'

import { i18n } from './i18n'

import App from './App.vue'

// 注册全局状态数据
import { setupStore } from './store'

// 路由信息
import { setupRouter } from './router'

const app = createApp(App)
app.use(setupStore)
app.use(setupRouter)
app.use(i18n)
app.mount('#app')
