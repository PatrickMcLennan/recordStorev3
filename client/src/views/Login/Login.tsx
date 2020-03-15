import React, { FC } from "react";
import { OnSubmit } from "react-hook-form";
import { onSubmit } from "./utils/helpers";

import Form from "./components/Form";

import * as S from "./Login.style";

const Login: FC = (): JSX.Element => {
  return (
    <>
      <S.H1>recordStore</S.H1>

      <Form onSubmit={onSubmit} />
    </>
  );
};

export default Login;
