<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :theme="[]"
    class="h-full"
  >
    <naive-provider>
      <router-view></router-view>
    </naive-provider>
    <n-global-style />
  </n-config-provider>
</template>

<script setup lang="ts">
import { NaiveProvider } from '@/components/common'
import { GlobalThemeOverrides } from 'naive-ui'
// 临时修改全局主题基本色，主题切换后续开发
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#F05053',
    primaryColorHover: '#F05053'
  }
}
</script>

<style lang="sass" scoped></style>
