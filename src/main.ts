import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupNaive } from '@/plugins/naive'
import { setupPinia } from '@/store'
import { setupRouter } from '@/router'

async function bootstrap() {
  const app = createApp(App)
  /* 挂在Pinia */
  setupPinia(app)
  /* 挂载UI框架 */
  setupNaive(app)
  /* 挂在路由 */
  setupRouter(app)

  app.mount('#app')
}

void bootstrap()
