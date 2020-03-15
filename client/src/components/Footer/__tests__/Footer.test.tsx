import React from "react";
import { Router } from "react-router-dom";
import { render, cleanup, RenderResult } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { ThemeProvider } from "styled-components";
import { theme } from "Utility/styleUtils/resets.style";
import Footer from "../Footer";

afterEach(cleanup);

const { getByTestId }: RenderResult = render(
  <ThemeProvider theme={theme}>
    <Router history={createMemoryHistory()}>
      <Footer />
    </Router>
  </ThemeProvider>
);

test("<Footer />", () => {
  const [name, github, linkedin, email] = [
    getByTestId(`name`),
    getByTestId(`github`),
    getByTestId(`linkedin`),
    getByTestId(`email`)
  ];

  [name, github, linkedin, email].forEach((element: HTMLElement) => {
    expect(element).toBeInTheDocument();
  });
  expect(name.textContent.includes("Made by")).toBe(true);
});
