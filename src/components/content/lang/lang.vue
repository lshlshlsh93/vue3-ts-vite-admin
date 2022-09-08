<template>
  <el-dropdown trigger="click" @command="languageChange">
    <svg-icon icon="icon-translate" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="language in languages"
          :key="language"
          :disabled="locale === language"
          :command="language"
        >
          {{ messages[language].el.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useApplication } from '@/store'
import { useI18n } from 'vue-i18n'
import { messages } from '@/i18n'

console.log(messages)

const appStore = useApplication()
const languages = Object.keys(messages)
const { locale, t } = useI18n()

const languageChange = async (language: string) => {
  await appStore.setLanguage(language)
  locale.value = language

  // 刷新页面
  location.reload()
}
</script>
