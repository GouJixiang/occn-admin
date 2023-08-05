<template>
  <n-layout has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      show-trigger
      bordered
      :native-scrollbar="false"
      class="my-sider shadow-md"
    >
      <div class="h-14 w-full flex items-center justify-center">
        <h1 class="font-bold text-3xl logo-title">OCCN</h1>
      </div>
      <n-menu :collapsed-width="64" :collapsed-icon-size="22" />
    </n-layout-sider>
    <n-layout>
      <!-- 首页菜单 -->
      <n-layout-header class="h-14" bordered>
        <Menu />
      </n-layout-header>
      <n-layout-content embedded class="my-content" :native-scrollbar="false">
        <Application />
      </n-layout-content>
      <n-layout-footer
        bordered
        class="h-12 my-footer flex items-center justify-center"
      >
        <a
          href="https://beian.miit.gov.cn/"
          style="text-decoration: none; color: black"
          target="_blank"
          >陕ICP备2023001751号</a
        >
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.my-content {
  padding: 20px 20px 10px 20px;
  height: calc(100vh - 58px - 48px);
}
.my-footer {
  background-color: white;
}
.logo-title {
  color: #f05053;
}
</style>
