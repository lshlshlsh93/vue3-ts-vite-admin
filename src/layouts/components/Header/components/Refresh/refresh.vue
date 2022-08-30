<script setup lang="ts">
import { useTab } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import type { Router, RouteLocationNormalizedLoaded } from 'vue-router'

const tabStore = useTab()
const router: Router = useRouter()
const route: RouteLocationNormalizedLoaded = useRoute()

const handleRefresh = (): void => {
  tabStore.delCacheView(route).then(() => {
    nextTick(() => {
      router.replace({ path: '/redirect' + route.path }).catch((err: any) => {
        console.warn(err)
      })
    })
  })
}
</script>
<template>
  <svg-icon icon="icon-reload" @click="handleRefresh" />
</template>
