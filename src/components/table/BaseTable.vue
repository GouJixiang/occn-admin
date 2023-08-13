<template>
  <n-space justify="end" :size="12">
    <n-button type="primary">新增</n-button>
    <n-button type="primary">编辑</n-button>
    <n-button type="primary">删除</n-button>
  </n-space>
  <n-data-table />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseTable'
})
</script>

<style scoped lang="scss"></style>
