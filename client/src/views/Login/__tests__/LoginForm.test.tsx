import React from "react";
import { Router } from "react-router-dom";
import { render, cleanup, RenderResult } from "@testing-library/react";
import "jest-styled-components";
import Form from "../components/Form";
import { createMemoryHistory } from "history";

import { ThemeProvider } from "styled-components";
import { theme } from "Utility/styleUtils/resets.style";
import { changeInput, fakeSubmit } from "Utility/testHelpers";

afterEach(cleanup);

const onSubmit: jest.Mock = jest.fn();

const { getByTestId }: RenderResult = render(
  <ThemeProvider theme={theme}>
    <Router history={createMemoryHistory()}>
      <Form onSubmit={onSubmit} />
    </Router>
  </ThemeProvider>
);

const form: HTMLElement = getByTestId("form");
const [email, password]: [HTMLElement, HTMLElement, HTMLElement] = [
  getByTestId("email"),
  getByTestId("password"),
  getByTestId("submit")
];
const [emailSup, passwordSup] = [
  getByTestId("emailSup"),
  getByTestId("passwordSup")
];

const mockEmail: string = "test@test.com";
const mockPassword: string = "testPassword";

test("Login Form Denial", async () => {
  // - Denies Empty Try - //
  [email, password].forEach((input: HTMLInputElement) => {
    expect(input.value).toBe("");
  });
  await fakeSubmit(form);

  [emailSup, passwordSup].forEach((sup: HTMLElement) => {
    // This is a known babel-plugin-styled-component bug, believe it or not.
    // Fix is awaiting a PR.  Return here to check error styles.
    expect(sup.textContent).toBe("*");
  });

  expect(onSubmit).not.toHaveBeenCalled();

  // - Denies Empty Password Field - //
  changeInput(email, mockEmail);
  await fakeSubmit(form);

  expect(email).toHaveValue(mockEmail);
  expect(password).toHaveValue("");
  expect(onSubmit).not.toHaveBeenCalled();

  // - Denies Empty Email Field - //
  changeInput(email, "");
  changeInput(password, mockPassword);
  await fakeSubmit(form);

  expect(email).toHaveValue("");
  expect(password).toHaveValue(mockPassword);
  expect(onSubmit).not.toHaveBeenCalled();
});

test("Login Form Success", async () => {
  changeInput(email, mockEmail);
  changeInput(password, mockPassword);
  await fakeSubmit(form);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
