module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
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