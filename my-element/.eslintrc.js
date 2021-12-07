module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // https://eslint.vuejs.org/
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
  },
};
