<template>
  <div class="footer">
    <span>{{ FOOTER_MESSAGE }}</span>
  </div>
</template>
<script setup lang="ts">
import { FOOTER_MESSAGE } from '../../../config'
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
