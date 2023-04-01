module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器环境中的全局变量。
    es2021: true,
    node: true, // Node.js 全局变量和 Node.js 作用域。
  },
  // 继承共享的配置
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@vue/eslint-config-prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'no-multi-spaces': 'error',
    'vue/multi-word-component-names': 'off',
    'no-empty-function': 'off'
  }
}