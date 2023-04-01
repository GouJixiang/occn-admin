<template>
  <div class="login-page w-full h-full">
    <div class="container">
      <div class="image-box"></div>
      <div class="form-box">
        <div class="box-header w-full">
          <h1 class="title">OCCN CG</h1>
          <h2>开箱即用的前后端代码生成工具</h2>
          <h3>Vue3 / Typescript / tailwindcss / Golang</h3>
        </div>
        <transition name="login-register-fade" mode="out-in">
          <LoginForm v-if="isLogin" @update-is-login="updateIsLogin" />
          <RegisterForm v-else @update-is-login="updateIsLogin" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginForm, RegisterForm } from './components'
import { ref } from 'vue'

const isLogin = ref<boolean>(true)
/* 切换登录和更新状态 */
function updateIsLogin(value: boolean) {
  isLogin.value = value
}
</script>

<style scoped lang="scss">
$container-width: 1200px;

.login-page {
  background: linear-gradient(to right, #e1eec3, #f05053) no-repeat;
  background-size: cover;
}

.login-register-fade-enter,
.login-register-fade-leave-to {
  opacity: 0;
  transform: translateX(350px);
}

.login-register-fade-enter-active,
.login-register-fade-leave-active {
  transition: all 0.5s ease;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 1200px;
  height: 600px;
  display: flex;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  & > div {
    height: 100%;
    padding: 20px;
  }

  .image-box {
    width: 714px;
    background: url('@/assets/images/login-bg.png') no-repeat;
    background-size: cover;
  }

  .form-box {
    width: calc($container-width - 714px);
    background: url('@/assets/images/login-img-left.png') no-repeat left bottom,
      url('@/assets/images/login-img-right.png') no-repeat right bottom;
    background-size: 30%;
  }

  .box-header {
    text-align: center;
    border-bottom: 3px solid #f05053;
    color: #f05053;
    padding: 5px;

    & > h1 {
      font-size: 30px;
      font-weight: bold;
    }
  }
}
</style>
