import React, { FC } from "react";
import {
  FormContextValues,
  useForm,
  OnSubmit,
  FormContext
} from "react-hook-form";

import * as S from "../Login.style";

interface IProps {
  onSubmit: OnSubmit<Record<string, any>>;
}

const Form: FC<IProps> = ({ onSubmit }: IProps): JSX.Element => {
  const { errors, handleSubmit, register }: FormContextValues = useForm();

  return (
    <S.Form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <S.Label error={errors.email} htmlFor="email">
        <span>
          Email: <sup data-testid="emailSup">*</sup>
        </span>
        <input
          data-testid="email"
          name="email"
          ref={register({ required: true })}
          type="email"
        />
      </S.Label>
      <S.Label error={errors.password} htmlFor="password">
        <span>
          Password: <sup data-testid="passwordSup">*</sup>
        </span>
        <input
          data-testid="password"
          name="password"
          ref={register({ required: true })}
          type="password"
        />
      </S.Label>

      <S.Submit
        aria-label="Log In"
        data-testid="submit"
        title="Log In"
        type="submit"
        value="Log In"
      />
    </S.Form>
  );
};

export default Form;
