module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
// Indent with 4 spaces
"indent": ["error", 4],

// Indent JSX with 4 spaces
"react/jsx-indent": ["error", 4],

// Indent props with 4 spaces
"react/jsx-indent-props": ["error", 4],
  },
};
