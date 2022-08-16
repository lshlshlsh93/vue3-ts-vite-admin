import { createApp } from 'vue'

import './styles/scss/global.css'

import App from './App.vue'
// 注册全局状态数据
import { setupStore } from './store'

// 路由信息
import { setupRouter } from './router'

const app = createApp(App)
app.use(setupStore)
app.use(setupRouter)
app.mount('#app')
