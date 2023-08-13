<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :theme="theme"
    :locale="zhCN"
    class="h-full"
  >
    <n-global-style />
    <naive-provider>
      <router-view></router-view>
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NaiveProvider } from '@/components/common'
import { NGlobalStyle, darkTheme, zhCN } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'
import { themeOptionsStore } from '@/store'

// 临时修改全局主题基本色，主题切换后续开发
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#F05053',
    primaryColorHover: '#DC686A'
  }
}

const themeStore = themeOptionsStore()
const theme: null | BuiltInGlobalTheme = computed(() => {
  return themeStore.isDarkTheme === false ? null : darkTheme
})
</script>

<style lang="sass" scoped></style>
