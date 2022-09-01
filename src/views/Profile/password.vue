<template>
  <div>
    <el-card>
      <el-form
        :size="c_s"
        ref="formRef"
        :model-value="form"
        :rules="formRules"
        @keyup.enter="handleSubmit(formRef)"
      >
        <el-form-item label="用户名">
          <span>{{ userStore.curUserName }}</span>
        </el-form-item>
        <el-form-item prop="passwd" label="密码">
          <el-input v-model="form.passwd" type="password" />
        </el-form-item>
        <el-form-item prop="newPasswd" label="新密码">
          <el-input v-model="form.newPasswd" type="password" />
        </el-form-item>
        <el-form-item prop="confirmPasswd" label="确认新密码">
          <el-input v-model="form.confirmPasswd" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit(formRef)"
            >确认</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import {
  RouteLocationNormalizedLoaded,
  Router,
  useRoute,
  useRouter,
} from 'vue-router'
import type { FormInstance } from 'element-plus'
import { useTab, useUser, useApplication } from '@/store'
const appStore = useApplication()
const tabStore = useTab()
const userStore = useUser()
const router = useRouter()
const route = useRoute()

const c_s: any = ref(appStore.curComponentSize)

const formRef: any = ref<FormInstance>()

const form = ref<{
  passwd: string
  newPasswd: string
  confirmPasswd: string
}>({
  passwd: '',
  newPasswd: '',
  confirmPasswd: '',
})
const validatePassword = ''
const formRules: any = ref({
  passwd: [{ required: true, message: '必填字段', trigger: 'blur' }],
  newPasswd: [{ required: true, validator: validatePassword, trigger: 'blur' }],
  confirmPasswd: [{ required: true, message: '必填字段', trigger: 'blur' }],
})
const handleSubmit = (formEl: FormInstance) => {
  if (!formEl) return
  formEl.validate((valid: boolean) => {
    if (!valid) {
      return false
    }
    updatePasswdApi(form).then(() => {
      ElMessage.success({
        message: '修改密码成功',
        duration: 1500,
      })
      closeTab(router, route)
    })
  })
}
/**
 * 关闭tab
 * @param router
 * @param tab
 */
const closeTab = (router: Router, tab: RouteLocationNormalizedLoaded): void => {
  if (tab.meta && tab.meta.affix) {
    return
  }
  tabStore.delView(tab)
  toLastView(router, tabStore.curVisitedViews, tab)
}
/**
 * 跳转到最后一个tab
 * @param router
 * @param visitedViews
 * @param view
 */
const toLastView = (
  router: Router,
  visitedViews: any[],
  view: RouteLocationNormalizedLoaded
): void => {
  const lastView = visitedViews.slice(-1)[0]
  if (lastView) {
    router.push(lastView.fullPath)
  } else {
    if (view.name === 'dashboard') {
      router.replace({ path: '/redirect' + view.fullPath })
    } else {
      router.push('/')
    }
  }
}
const updatePasswdApi: any = (form: any) => {}
</script>
<style lang="scss" scoped></style>
