/* eslint-disable */
"use strict";

module.exports = {
  // env: "jsdom",
  resolver: "jest-webpack-resolver",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^.*(jpe?g|png|ttf).*$": "<rootDir>/assetsTransformer.js"
  },
  verbose: true
};
