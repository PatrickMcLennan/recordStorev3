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

const form: HTMLElement = getByTestId(`form`);
const [firstName, lastName, email, password, passwordConfirm]: HTMLElement[] = [
  getByTestId("firstName"),
  getByTestId("lastName"),
  getByTestId("email"),
  getByTestId("password"),
  getByTestId("passwordConfirm")
];
const inputs: HTMLElement[] = [
  firstName,
  lastName,
  email,
  password,
  passwordConfirm
];

test("Create Account", async () => {
  inputs.forEach((input: HTMLElement) => {
    expect(input).toHaveValue("");
  });

  // First
  changeInput(firstName, "John");
  await fakeSubmit(form);
  expect(onSubmit).not.toHaveBeenCalled();

  // First + Last
  changeInput(firstName, "John");
  changeInput(lastName, "Doe");
  await fakeSubmit(form);
  expect(onSubmit).not.toHaveBeenCalled();

  // First + Last + Email
  changeInput(email, "john@john.com");
  await fakeSubmit(form);
  expect(onSubmit).not.toHaveBeenCalled();

  // First + Last + Email + Password
  changeInput(password, "password");
  await fakeSubmit(form);
  expect(onSubmit).not.toHaveBeenCalled();

  // First + Last + Email + PasswordConfirm
  changeInput(passwordConfirm, "passwordConfirm");
  await fakeSubmit(form);
  expect(onSubmit).not.toHaveBeenCalled();

  expect(firstName).toHaveValue("John");
  expect(lastName).toHaveValue("Doe");
  expect(email).toHaveValue("john@john.com");
  expect(password).toHaveValue("password");
  expect(passwordConfirm).toHaveValue("passwordConfirm");

  changeInput(passwordConfirm, "password");

  await fakeSubmit(form);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
