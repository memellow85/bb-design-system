module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:vue/vue3-essential',
  ],
  plugins: ['prettier'],
  rules: {
    'no-prototype-builtins': 'off',
    'vue/no-mutating-props': 'off',
    'array-callback-return': 'off',
    'new-cap': 'off',
    'vue/no-v-html': 'off',
    'no-useless-constructor': 'off',
    'no-new': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off',
    'nuxt/no-cjs-in-config': 'off',
  },
  globals: {
    window: true,
  },
}
