<template>
  <div>
    <n-button type="primary" @click="handleLogin">登录</n-button>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['updateIsLogin'])

function handleLogin() {
  emits('updateIsLogin', true)
}
</script>

<style scoped lang="scss"></style>
