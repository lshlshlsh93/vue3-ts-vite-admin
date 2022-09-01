<template>
  <div class="navbar-search">
    <svg-icon icon="icon-search" @click="handleOpenSearch" />
    <el-dialog
      v-model="visible"
      :width="280"
      :destroy-on-close="true"
      :modal="false"
      fullscreen
      :show-close="false"
    >
      <el-autocomplete
        v-model="menuValue"
        :ref="menuAutocompleteRef"
        size="large"
        :prefix-icon="Search"
        :fetch-suggestions="handleMenuSearch"
        @select="handleSelect"
        @blur="handleBlur"
        placeholder="菜单搜索"
      >
        <template #default="{ item }">
          <svg-icon :icon="item.meta.icon" />&nbsp;
          <el-divider direction="vertical" />
          <span>{{ item.meta.title }}&nbsp;{{ item.path }}</span>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRouterStore } from '@/store'
import { Search } from '@element-plus/icons-vue'

interface IRestaurant {
  path: string
  meta: {
    title: string
  }
}

const router = useRouter()
const routerStore = useRouterStore()
const menuAutocompleteRef = ref()
const visible = ref(false)
const menuValue = ref('')

const handleOpenSearch = () => {
  visible.value = true
  nextTick(() => {
    setTimeout(() => {
      menuAutocompleteRef.value.focus()
    })
  })
}

// 获取菜单列表
const menuList = routerStore.searchMenu

// 处理菜单搜索
const handleMenuSearch = (queryStr: string, callback: any) => {
  const result = queryStr ? menuList.filter(createFilter(queryStr)) : menuList
  callback(result)
}

// 过滤
const createFilter: any = (queryStr: string) => {
  return (restaurant: IRestaurant) => {
    return (
      restaurant.path.toLowerCase().indexOf(queryStr.toLowerCase()) > -1 ||
      restaurant.meta.title.toLowerCase().indexOf(queryStr.toLowerCase()) > -1
    )
  }
}
const handleSelect: any = (item: IRestaurant) => {
  router.push(item.path)
  visible.value = false
}
const handleBlur = () => {
  visible.value = false
}
</script>
<style lang="scss" scoped>
.navbar-search {
  :deep(.el-dialog) {
    box-shadow: unset !important;
    border-radius: 0 !important;
    background-color: rgba(0, 0, 0, 0.5);
  }
  :deep(.el-autocomplete) {
    width: 560px;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
