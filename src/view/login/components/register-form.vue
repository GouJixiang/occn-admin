<template>
  <div>
    <n-form :show-label="false">
      <n-form-item>
        <n-input type="text" placeholder="用户昵称" />
      </n-form-item>
      <n-form-item>
        <n-input type="text" placeholder="账号" />
      </n-form-item>
      <n-form-item>
        <n-input type="text" placeholder="手机号" />
      </n-form-item>
      <n-form-item>
        <n-input type="text" placeholder="密码" />
      </n-form-item>
      <n-form-item>
        <n-input type="text" placeholder="重复密码" />
      </n-form-item>
      <n-form-item>
        <n-space justify="center" class="w-full">
          <n-button type="primary" @click="handleLogin">注册</n-button>
          <n-button @click="handleLogin">返回登录</n-button>
        </n-space>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['updateIsLogin'])

function handleLogin() {
  emits('updateIsLogin', true)
}
</script>

<style scoped lang="scss"></style>
