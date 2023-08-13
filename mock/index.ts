import { createProdMockServer } from 'vite-plugin-mock/dist/client'
import api from './api/index'

export function setupProdMockServer() {
  createProdMockServer([...api])
}
