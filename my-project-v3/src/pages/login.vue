<template>
  <div class="login">
    <h2>人脸识别应用管理系统</h2>
    <div class="login-content">
      <h3>登录</h3>
      <el-form ref="form" :model="formData">
        <el-form-item>
          <el-input v-model="formData.name" :prefix-icon="Search" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formData.password" :prefix-icon="Lock" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="goToHome" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import { Search, Lock } from '@element-plus/icons'

const formData = reactive({
  name: '',
  password: '',
})

const router = useRouter()
function goToHome() {
  router.push({
    name: 'home',
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 600px;
  background: url('@/assets/login.png') no-repeat center;
  position: relative;
  h2 {
    position: absolute;
    left: 5%;
    top: 20px;
    font-size: 36px;
    color: #ffffff;
  }
  .login-content {
    background: rgba(0, 92, 195, 0.3);
    backdrop-filter: blur(8px);
    width: 400px;
    border-radius: 2px;
    padding: 24px 40px 40px;
    box-shadow: 4px 4px 24px 0px rgba(0, 0, 0, 1);
    position: absolute;
    top: 50%;
    right: 15%;
    transform: translateY(-50%);
    h3 {
      font-size: 36px;
      line-height: 50px;
      color: #2080f7;
      text-align: center;
      margin-bottom: 24px;
    }
  }
  :deep(.el-button) {
    width: 100%;
    margin-top: 24px;
  }
}
</style>
