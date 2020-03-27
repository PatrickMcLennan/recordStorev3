import React, { FC } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import Form from "./components/Form";

import { CREATE_ACCOUNT } from "GraphQL/queries";

const CreateAccount: FC = () => {
  const [onSubmit, { loading, error, data }] = useLazyQuery(CREATE_ACCOUNT);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  else console.log(data);

  return (
    <>
      <h1>Create an Account</h1>
      <Form onSubmit={onSubmit} />
    </>
  );
};

export default CreateAccount;
