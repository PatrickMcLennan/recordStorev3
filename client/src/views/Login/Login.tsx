import React, { FC } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import Form from "./components/Form";

import { LOG_IN } from "GraphQL/queries";

import * as S from "./Login.style";

const Login: FC<{}> = (): JSX.Element => {
  const [onSubmit, { loading, error, data }] = useLazyQuery(LOG_IN);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  else console.log(data);

  return (
    <>
      <S.H1>recordStore</S.H1>
      <Form onSubmit={onSubmit} />
    </>
  );
};

export default Login;
