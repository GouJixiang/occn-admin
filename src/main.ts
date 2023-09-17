import { App, createApp } from 'vue'
import './style.css'
import AppElement from './App.vue'
import { setupNaive } from '@/plugins/naive'
import { setupPinia } from '@/store'
import { setupRouter } from '@/router'
import * as Icons5 from '@vicons/ionicons5'
import * as AntdIcon from '@vicons/antd'

/* 全局加载图标 */
function setupIcon(app: App) {
  Object.keys(Icons5).forEach((key: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.component(key, Icons5[key])
  })
  app.config.globalProperties.$icons5 = Icons5

  Object.keys(AntdIcon).forEach((key: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.component(key, AntdIcon[key])
  })
  app.config.globalProperties.$antdIcon = AntdIcon
}

async function bootstrap() {
  const app = createApp(AppElement)
  /* 挂在Pinia */
  setupPinia(app)
  /* 挂载UI框架 */
  setupNaive(app)
  /* 挂在路由 */
  setupRouter(app)
  /* 挂载全局图标 */
  setupIcon(app)
  app.mount('#app')
}

void bootstrap()
