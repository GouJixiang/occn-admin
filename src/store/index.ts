import type { App } from 'vue'
import { createPinia } from 'pinia'
import { themeOptionsStore } from './theme'

const store = createPinia()

export function setupPinia(app: App) {
  app.use(store)
}

export { store, themeOptionsStore }
