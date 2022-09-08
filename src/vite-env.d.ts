/// <reference types="vite/client" />

declare module '*.svg'
declare module '*.png'
declare module '*.gif'
declare module '*.scss'
declare module '*.ts'
declare module '*.js'
declare module 'qs'
declare module 'nprogress'

declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/github.js'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare function $t(key: string, params?: any): string

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
