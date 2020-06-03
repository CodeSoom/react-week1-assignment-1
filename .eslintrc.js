module.exports = {
  env: {
    browser: true,
    es6: true,
    'codeceptjs/codeceptjs': true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:codeceptjs/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'codeceptjs'
  ],
  rules: {
    "no-unused-vars": [0]
  },
};
