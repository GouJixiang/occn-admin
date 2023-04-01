<template>
  <n-config-provider class="h-full">
    <naive-provider>
      <router-view></router-view>
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import NaiveProvider from '@/components/common/naive-provider.vue'
</script>

<style lang="sass" scoped></style>
