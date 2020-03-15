"use strict";

module.exports = {
  extends: ["airbnb-typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "plugin:react-recommended"],
  env: {
    browser: true,
    es6: true
    // 'jest/globals': true
  },
  rules: {
    "@typescript-eslint/rule-name": "error",
    "no-unused-vars": "error"
  }
};
