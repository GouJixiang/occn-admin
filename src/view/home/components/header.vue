<template>
  <n-space justify="space-between" class="h-full">
    <n-space class="h-full">
      <n-button
        class="h-full"
        quaternary
        :focusable="false"
        @click="updateCollapsed"
      >
        <template #icon>
          <n-icon>
            <MenuUnfoldOutlined v-if="props.collapsed" />
            <MenuFoldOutlined v-else />
          </n-icon>
        </template>
      </n-button>
      <n-breadcrumb class="h-full flex items-center justify-center">
        <n-breadcrumb-item v-for="item in breadcrumbItems" :key="item.name">
          {{ item.meta.title }}
        </n-breadcrumb-item>
      </n-breadcrumb>
    </n-space>
    <n-space class="h-full" :size="0">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button
            quaternary
            :focusable="false"
            class="h-full"
            @click="fullScreenChange"
          >
            <template #icon>
              <n-icon :size="20">
                <FullscreenExitOutlined v-if="fullscreen" />
                <FullscreenOutlined v-else />
              </n-icon>
            </template>
          </n-button>
        </template>
        <span>{{ fullscreen ? '退出全屏' : '全屏' }}</span>
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button quaternary :focusable="false" class="h-full">
            <template #icon>
              <n-icon :size="20"><GithubOutlined /></n-icon>
            </template>
          </n-button>
        </template>
        <span>Github</span>
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button
            quaternary
            :focusable="false"
            class="h-full"
            :onclick="handleThemeChange"
          >
            <template #icon>
              <n-icon :size="20"
                ><Sunny v-if="isDarkTheme" /> <Moon v-else
              /></n-icon>
            </template>
          </n-button>
        </template>
        <span>深色模式</span>
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button quaternary :focusable="false" class="h-full">
            <template #icon>
              <n-icon :size="20"><Language /></n-icon>
            </template>
          </n-button>
        </template>
        <span>语言</span>
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-badge
            :value="2"
            :max="99"
            :offset="[-8, 17]"
            processing
            class="h-full"
          >
            <n-button quaternary :focusable="false" class="h-full">
              <template #icon>
                <n-icon :size="20"><Notifications /></n-icon>
              </template>
            </n-button>
          </n-badge>
        </template>
        <span>消息</span>
      </n-tooltip>
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button quaternary :focusable="false" class="h-full">
            <template #icon>
              <n-icon :size="20"><Home /></n-icon>
            </template>
          </n-button>
        </template>
        <span>首页</span>
      </n-tooltip>
      <n-dropdown
        trigger="hover"
        :options="options"
        class="h-full"
        @select="handleAvatarSelect"
      >
        <n-button quaternary class="h-full">
          <n-avatar size="large" :src="avatarJpg" />
          <span class="user_name"></span>
        </n-button>
      </n-dropdown>
    </n-space>
  </n-space>
</template>
<script setup lang="ts">
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined
} from '@vicons/antd'
import { Component, computed, h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  Notifications,
  Home,
  Language,
  Sunny,
  Moon
} from '@vicons/ionicons5'
import { useRouter } from 'vue-router'
import router from '@/router'
import { themeOptionsStore } from '@/store'
import avatarJpg from '@/assets/images/avatar.jpg'

const route = useRouter()
const emits = defineEmits(['update:collapsed'])
const props = defineProps({
  collapsed: {
    type: Boolean,
    required: true
  }
})

const breadcrumbItems = computed(() => route.currentRoute.value.matched)
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}
const themeStore = themeOptionsStore()
const isDarkTheme = computed(() => themeStore.isDarkTheme)
// 全屏标志
const fullscreen = ref<boolean>(false)
const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]

/**
 * 折叠侧边栏
 */
function updateCollapsed() {
  emits('update:collapsed', !props.collapsed)
}

function handleThemeChange() {
  themeStore.isDarkTheme = !isDarkTheme.value
}

/**
 * 全屏切换
 */
function fullScreenChange() {
  if (document.fullscreenElement) {
    document.exitFullscreen()
    fullscreen.value = false
  } else {
    document.documentElement.requestFullscreen()
    fullscreen.value = true
  }
}

/**
 * 头像下拉菜单组件选择事件
 * @param key 选中的option
 */
function handleAvatarSelect(key: string | number) {
  switch (key) {
    case 'logout':
      window.localStorage.removeItem('token')
      router.push({ name: 'login' })
      break
  }
}
</script>
<style scoped lang="scss">
.user_name {
  margin-left: 5px;
  font-weight: bolder;
  font-size: 18px;
}
</style>
