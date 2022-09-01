<template>
  <span v-if="isDark" @click.stop="toggleDark()">
    <svg-icon icon="icon-moon" />
  </span>
  <span v-else @click.stop="toggleDark()">
    <svg-icon icon="icon-sun" />
  </span>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useApplication } from '@/store'
const appStore = useApplication()

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style lang="scss" scoped></style>
