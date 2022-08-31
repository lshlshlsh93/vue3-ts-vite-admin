<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avatar-box">
        <img src="../../assets/images/others/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <div class="login-wrapper">
        <!-- <el-form
          class="login-form"
          label-width="0"
          ref="loginFormRef"
          :rules="loginFormRules"
          :model-value="loginForm"
          @keyup.enter="handleLogin"
        > -->
        <div class="login-title">登录</div>
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            :prefix-icon="UserFilled"
            v-model="loginForm.username"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            show-password
            :prefix-icon="Lock"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item class="form-btn">
          <el-button type="primary" @click="handleLogin">登录 </el-button>
          <el-button type="danger" @click="handleReset">重置 </el-button>
        </el-form-item>
        <!-- </el-form> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { Lock, UserFilled } from '@element-plus/icons-vue'
import { useUser } from '@/store'

const userStore = useUser()
const router = useRouter()

// 表单属性
const loginFormRef: any = ref(null)
const loginForm = ref<{ username: string; password: string }>({
  username: 'admin',
  password: 'admin',
})
// 表单验证规则
const loginFormRules = ref<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '密码格式不正确', trigger: 'blur' }],
})

// 用户登录
const handleLogin = () => {
  // loginFormRef.value.validate((valid: boolean) => {
  //   if (!valid) {
  //     console.error('error submit!')
  //     return false
  //   }

  // 用户登录
  userStore.loginAction(loginForm).then((response) => {
    console.log(response)
    router.push({ path: '/dashboard' })
  })
  // })
}
// 重置表单
const handleReset = () => {
  loginFormRef.resetFields()
}
</script>
<style lang="scss" scoped>
.login-container {
  height: 100%;
  background-color: #2b4b6b;
  .login-box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); // 旋转
    .avatar-box {
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      background-color: #fff;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: eee;
      }
    }

    .login-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .form-btn {
        float: right;
      }
    }
  }
}
</style>
