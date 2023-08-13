import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    viteMockServe({ mockPath: 'mock', enable: true })
  ],
  base: './',
  // 设置路径别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src')
      }
    ]
  }
})
