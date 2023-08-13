import { defineStore } from 'pinia'

// TODO: themeColor的主题应该是一个主题集合，通过切换按钮来切换已经应用好的主题色
interface ThemeOptions {
  isDarkTheme: boolean
  themeColor: string
}

export const themeOptionsStore = defineStore('themeOptionsStore', {
  state(): ThemeOptions {
    return {
      isDarkTheme: true,
      themeColor: ''
    }
  }
})
