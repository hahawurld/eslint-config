module.exports = {
  env: {
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "prefer-const": "error",
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
};
