module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    actor: 'readonly',
    Feature: 'readonly',
    Scenario: 'readonly',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    'linebreak-style': 0,
    indent: 'off',
  },
};
