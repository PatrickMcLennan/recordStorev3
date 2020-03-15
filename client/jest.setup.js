"use strict";

// import 'jest-styled-components';
// eslint-disable-next-line
import regeneratorRuntime from "regenerator-runtime";
import "babel-polyfill";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
