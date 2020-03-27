import React, { FC, FormEvent } from "react";
import {
  FormContextValues,
  ManualFieldError,
  useForm,
  OnSubmit,
  FormContext,
  NestDataObject
} from "react-hook-form";

import { compareString } from "Utility/functions";

interface IProps {
  onSubmit: OnSubmit<Record<string, any>>;
}

const Form: FC<IProps> = ({ onSubmit }): JSX.Element => {
  const {
    errors,
    handleSubmit,
    register,
    setError
  }: FormContextValues = useForm();

  const passwordsAreTheSame = (values: NestDataObject<any>) => {
    if (
      compareString(values.password) !== compareString(values.passwordConfirm)
    ) {
      return [
        values.password,
        values.passwordConfirm
      ].forEach((value: ManualFieldError<Record<string, any>>[]): void =>
        setError(value)
      );
    } else return onSubmit(values);
  };

  return (
    <form data-testid="form" onSubmit={handleSubmit(passwordsAreTheSame)}>
      <label htmlFor="firstName">
        <span>
          First Name: <sup>*</sup>
        </span>
        <input
          data-testid="firstName"
          name="firstName"
          ref={register({ required: true })}
          type="text"
        />
      </label>
      <label htmlFor="lastName">
        <span>
          Last Name: <sup>*</sup>
        </span>
        <input
          data-testid="lastName"
          name="lastName"
          ref={register({ required: true })}
          type="text"
        />
      </label>
      <label htmlFor="email">
        <span>
          Email: <sup>*</sup>
        </span>
        <input
          data-testid="email"
          name="email"
          ref={register({ required: true })}
          type="email"
        />
      </label>
      <label htmlFor="password">
        <span>
          Password: <sup>*</sup>
        </span>
        <input
          data-testid="password"
          name="password"
          ref={register({ required: true })}
          type="password"
        />
      </label>
      <label htmlFor="passwordConfirm">
        <span>
          Password: <sup>*</sup>
        </span>
        <input
          data-testid="passwordConfirm"
          name="passwordConfirm"
          ref={register({ required: true })}
          type="password"
        />
        <input data-testid="submit" type="submit" value="Create Account" />
      </label>
    </form>
  );
};

export default Form;
