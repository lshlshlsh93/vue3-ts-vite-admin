<template>
  <div class="logo">
    <img :src="PROJECT_LOGO_URL" alt="logo" />
    <span>{{ PROJECT_TITLE }}</span>
  </div>
</template>
<script setup lang="ts">
import { PROJECT_TITLE, PROJECT_LOGO_URL } from '../../../../../config'
</script>
<style lang="scss" scoped>
.logo {
  background-color: #2b2f3a;
  height: 50px;
  border: none;
  line-height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  color: #fff;
  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
