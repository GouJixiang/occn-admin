<template>
  <n-config-provider :theme-overrides="themeOverrides" class="h-full">
    <n-global-style />
    <naive-provider>
      <router-view></router-view>
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NaiveProvider } from '@/components/common'
import { NGlobalStyle } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
// 临时修改全局主题基本色，主题切换后续开发
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#F05053',
    primaryColorHover: '#dc686a'
  }
}
</script>

<style lang="sass" scoped></style>
