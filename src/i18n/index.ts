export * from './language'
import { createI18n } from 'vue-i18n'

// element-plus 国际化文件
import element_zh_cn from 'element-plus/lib/locale/lang/zh-cn'
import element_en from 'element-plus/lib/locale/lang/en'
import { AppCache } from '@/utils'

// 项目 国际化文件
const zh_ch = import.meta.globEager('./language/**/zh-CH.ts')
const en_us = import.meta.globEager('./language/**/en-US.ts')

type _msg_type = { [key: string]: string }
type _msg_type_ = { [key: string]: any }

/**
 * 加载项目中的国际化文件
 * @param modules
 * @returns
 */
export const loadLanguage = (modules: Record<string, any>): _msg_type => {
  const message: _msg_type = {}
  Object.keys(modules).forEach((module) => {
    Object.assign(message, { ...modules[module].default })
  })
  return message
}

export const messages: _msg_type_ = {
  'zh-CN': {
    lang_name: '简体中文',
    ...loadLanguage(zh_ch),
    el: {
      ...element_zh_cn,
    },
  },
  'en-US': {
    lang_name: 'English',
    ...loadLanguage(en_us),
    el: {
      ...element_en,
    },
  },
}

// 返回当前 Language
function getLanguage() {
  return AppCache.getLanguage().length === 0 ? '' : AppCache.getLanguage()
}

export const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  messages,
})
