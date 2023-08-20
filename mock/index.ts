import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import system from './system/index'

export function setupProdMockServer() {
  createProdMockServer([...system])
}
