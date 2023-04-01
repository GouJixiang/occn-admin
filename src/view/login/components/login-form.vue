<template>
  <div class="login-form">
    <n-form :show-label="false">
      <n-form-item>
        <n-input type="text" placeholder="账户" clearable />
      </n-form-item>
      <n-form-item>
        <n-input type="password" placeholder="密码" show-password-on="click" />
      </n-form-item>
      <n-form-item>
        <n-input type="text" placeholder="验证码" />
        <n-button
          :disabled="codeDisable"
          style="width: 98px"
          @click="handleGetCode"
          >{{ code }}</n-button
        >
      </n-form-item>
      <n-form-item>
        <n-checkbox-group>
          <n-checkbox value="read">我已阅读</n-checkbox>
        </n-checkbox-group>
        <a href="#" class="read-a">《用户使用说明》</a>
      </n-form-item>
      <n-form-item>
        <n-space class="w-full" justify="center">
          <n-button type="primary" @click="handleSubmit">登录</n-button>
          <n-button @click="handleRegister">注册</n-button>
        </n-space>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref<string>('获取验证码')
const codeDisable = ref<boolean>(false)
const emits = defineEmits(['updateIsLogin'])

let time = ref(60)
function handleGetCode() {
  if (time.value-- <= 1) {
    code.value = '获取验证码'
    codeDisable.value = false
    time.value = 60
  } else {
    code.value = time.value + '秒'
    codeDisable.value = true
    setTimeout(() => {
      handleGetCode()
    }, 1000)
  }
}

function handleSubmit() {
  window.$message?.error('登陆失败')
}

function handleRegister() {
  emits('updateIsLogin', false)
}
</script>

<style scoped lang="scss">
.login-form {
  margin-top: 50px;
  width: 100%;
}

.read-a {
  color: #f05053;

  &:hover {
    color: #ef8385;
  }
}
</style>
