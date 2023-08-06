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
        <n-el tag="a" class="read-a" @click="showUserInstruction = true"
          >《用户隐私说明》</n-el
        >
      </n-form-item>
      <n-form-item>
        <n-space class="w-full" justify="center">
          <n-button type="primary" @click="handleSubmit">登录</n-button>
          <n-button @click="handleRegister">注册</n-button>
        </n-space>
      </n-form-item>
    </n-form>
    <!-- 用户须知 -->
    <n-modal
      v-model:show="showUserInstruction"
      :mask-closable="false"
      :auto-focus="false"
      class="user-instruction-model"
    >
      <n-card
        style="width: 600px"
        title="用户隐私说明"
        :bordered="false"
        size="medium"
        role="card"
        aria-modal="true"
        closable
        @close="showUserInstruction = false"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aliquid consequatur eum exercitationem hic ipsa itaque laudantium
        mollitia officiis quae quia quis quo quos rerum, sit. Aut id laborum
        similique!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci aliquid consequatur eum exercitationem hic ipsa itaque
        laudantium mollitia officiis quae quia quis quo quos rerum, sit. Aut id
        laborum similique!Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci aliquid consequatur eum exercitationem hic ipsa itaque
        laudantium mollitia officiis quae quia quis quo quos rerum, sit. Aut id
        laborum similique!Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci aliquid consequatur eum exercitationem hic ipsa itaque
        laudantium mollitia officiis quae quia quis quo quos rerum, sit. Aut id
        laborum similique!Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci aliquid consequatur eum exercitationem hic ipsa itaque
        laudantium mollitia officiis quae quia quis quo quos rerum, sit. Aut id
        laborum similique!Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci aliquid consequatur eum exercitationem hic ipsa itaque
        laudantium mollitia officiis quae quia quis quo quos rerum, sit. Aut id
        laborum similique!Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci aliquid consequatur eum exercitationem hic ipsa itaque
        laudantium mollitia officiis quae quia quis quo quos rerum, sit. Aut id
        laborum similique!Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci aliquid consequatur eum exercitationem hic ipsa itaque
        laudantium mollitia officiis quae quia quis quo quos rerum, sit. Aut id
        laborum similique!Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci aliquid consequatur eum exercitationem hic ipsa itaque
        laudantium mollitia officiis quae quia quis quo quos rerum, sit. Aut id
        laborum similique!
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const code = ref<string>('获取验证码')
const codeDisable = ref<boolean>(false)
const showUserInstruction = ref<boolean>(false)

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
  window.localStorage.setItem('token', 'admin')
  router.push({ name: 'dashboard-staging' })
}

function handleRegister() {
  emits('updateIsLogin', false)
}
</script>

<style scoped lang="scss">
.login-form {
  width: 100%;
}

.user-instruction-model {
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.read-a {
  color: var(--primary-color);
  cursor: pointer;

  &:hover {
    color: var(--primary-color-hover);
  }
}
</style>
