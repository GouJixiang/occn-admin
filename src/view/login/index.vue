<template>
  <n-el tag="div" class="login-page w-full h-full">
    <div class="container">
      <div class="image-box">
        <div class="theme-switch">
          <n-switch v-model:value="active">
            <template #checked-icon> 🌙 </template>
            <template #unchecked-icon> ☀ </template>
          </n-switch>
        </div>
      </div>
      <div class="form-box">
        <div class="box-header w-full">
          <n-el tag="h1" class="title">OCCN CG</n-el>
          <n-el tag="h2">开箱即用的前后端代码生成工具</n-el>
          <n-el tag="h3">Vue3 / Typescript / tailwindcss / Golang</n-el>
        </div>
        <n-el tag="div" class="form-title"
          ><span>{{ formTitle }}</span></n-el
        >
        <LoginForm v-if="isLogin" @update-is-login="updateIsLogin" />
        <RegisterForm v-else @update-is-login="updateIsLogin" />
      </div>
    </div>
    <footer>occn.top | yangxy</footer>
  </n-el>
</template>

<script setup lang="ts">
import { LoginForm, RegisterForm } from './components'
import { computed, ref } from 'vue'

const active = ref<boolean>(false)
const isLogin = ref<boolean>(true)
const formTitle = computed(() => {
  if (isLogin.value) return '账密登录'
  else return '用户注册'
})

/* 切换登录和更新状态 */
function updateIsLogin(value: boolean) {
  isLogin.value = value
}
</script>

<style scoped lang="scss">
$container-width: 1200px;

.login-page {
  background: linear-gradient(to right, #e1eec3, var(--primary-color)) no-repeat;
  background-size: cover;

  footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
    font-size: 16px;
    //font-weight: bold;
    color: white;
    text-align: center;
  }
}

.form-title {
  font-size: 18px;
  font-weight: bold;
  line-height: 70px;
  color: var(--primary-color);
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
    border-bottom: 3px solid var(--primary-color);
    color: var(--primary-color);
    padding: 5px;

    & > h1 {
      font-size: 30px;
      font-weight: bold;
    }
  }
}
</style>
