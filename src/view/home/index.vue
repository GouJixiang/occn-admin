<template>
  <n-layout has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="64"
      :collapsed="collapsed"
      :width="240"
      show-trigger
      bordered
      :native-scrollbar="false"
      class="my-sider shadow-md"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <div class="h-14 w-full flex items-center justify-center">
        <n-el v-if="collapsed" tag="h1" class="font-bold text-3xl logo-title"
          >CN</n-el
        >
        <n-el v-else tag="h1" class="font-bold text-3xl logo-title">OCCN</n-el>
      </div>
      <n-menu
        :value="menuActiveKey"
        :options="menuOptions"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :render-icon="renderIcon"
        :watch-props="['defaultExpandedKeys']"
        @update:value="handleUpdateMenu"
      />
    </n-layout-sider>
    <n-layout>
      <!-- 首页菜单 -->
      <n-layout-header class="h-14" bordered>
        <Header :collapsed="collapsed" @update:collapsed="collapsed = $event" />
      </n-layout-header>
      <n-layout-content embedded class="my-content" :native-scrollbar="false">
        <router-view />
      </n-layout-content>
      <n-layout-footer
        bordered
        class="h-12 my-footer flex items-center justify-center"
      >
        <n-el tag="p" href="https://beian.miit.gov.cn/" target="_blank"
          >陕ICP备2023001751号</n-el
        >
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { computed, ref, h } from 'vue'
import Header from '@/view/home/components/header.vue'
import { useRouter } from 'vue-router'
import { NIcon, MenuOption } from 'naive-ui'
import useCurrentInstance from '@/hooks/useCurrentInstance'
import Service from '@/view/home/service'

const route = useRouter()
const collapsed = ref<boolean>(false)
const menuActiveKey = computed(() => route.currentRoute.value.name as string)
const menuOptions = ref([])

Service.getMenuApi().then((res) => {
  menuOptions.value = res.data
})

function renderIcon(menuOption: MenuOption) {
  const { globalProperties } = useCurrentInstance()
  const icons = menuOption.icons as never as string
  const iconPrefix = icons.split(':')[0]
  const iconComponent = icons.split(':')[1]
  const component =
    iconPrefix === 'antd'
      ? globalProperties.$antdIcon[iconComponent]
      : globalProperties.$icons5[iconComponent]
  return h(
    NIcon,
    {
      component: component
    },
    { default: () => null }
  )
}

/**
 * 菜单点击事件
 * @param _key 菜单key
 */
function handleUpdateMenu(_key: string) {
  route.push({ name: _key })
}
</script>

<style scoped lang="scss">
.my-content {
  padding: 20px 20px 10px 20px;
  height: calc(100vh - 58px - 48px);
}
.logo-title {
  color: var(--primary-color);
}
</style>
