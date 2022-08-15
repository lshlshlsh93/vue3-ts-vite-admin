<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avatar-box">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        class="login-form"
        label-width="0"
        ref="loginFormRef"
        :rules="loginFormRules"
        :model="loginForm"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            autofocus
            :prefix-icon="UserFilled"
            v-model="loginForm.username"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            show-password
            :prefix-icon="Lock"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item class="form-btn">
          <el-button type="primary" @click="handleLogin(loginFormRef)"
            >登录
          </el-button>
          <el-button type="danger" @click="handleReset(loginFormRef)"
            >重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { Lock, UserFilled } from '@element-plus/icons-vue'
// 表单类型
interface ILogin {
  username: string
  password: string
}

const router = useRouter()

// 表单属性
const loginFormRef = ref<FormInstance>()
const loginForm = ref<ILogin>({
  username: '',
  password: '',
})
// 表单验证规则
const loginFormRules = ref<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '密码格式不正确', trigger: 'blur' }],
})

// 用户登录
const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      ElMessage.success('登录成功')
      router.push({ path: '/dashboard' })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
// 重置表单
const handleReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
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
        background-color: #eee;
      }
    }

    .login-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .form-btn {
        float: right;
      }
    }
  }
}
</style>
