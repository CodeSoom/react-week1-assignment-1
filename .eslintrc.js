module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
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
    rules: {},
};