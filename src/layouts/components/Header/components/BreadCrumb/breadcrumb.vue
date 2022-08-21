<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in tabs">
        <span>{{ item.meta.name }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { Ref } from 'vue'
import { useRoute, RouteLocationMatched } from 'vue-router'

const route = useRoute()

// 定义面包屑导航数据
const tabs: Ref<RouteLocationMatched[]> = ref([])

const fetchBreadcrumb = (): void => {
  let matched: RouteLocationMatched[] = route.matched.filter(
    (item) => item.meta && item.meta.name
  )

  const isDashboard: RouteLocationMatched = matched[0]
  if (isDashboard.path !== '/dashboard') {
    matched = [{ path: '/dashboard', meta: { name: '首页' } } as any].concat(
      matched
    )
  }
  console.log(isDashboard)

  tabs.value = matched
  console.log(tabs)

  fetchBreadcrumb()
  watch(
    () => route.path,
    () => fetchBreadcrumb()
  )
}
</script>
<style lang="scss" scoped></style>
