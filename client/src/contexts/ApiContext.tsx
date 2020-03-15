import React, { createContext, Context, FC, ReactNode } from "react";
import { client } from "Utility/client";
import { gql } from "apollo-boost";
export interface IApiContext {
  loginApiCall: Function;
}

interface IProps {
  children: ReactNode;
}

export const ApiContext: Context<IApiContext> = createContext(
  {} as IApiContext
);

const ApiContextProvider: FC<IProps> = ({ children }: IProps): JSX.Element => {
  const loginApiCall: Function = (): void => console.log("hello");
  return (
    <ApiContext.Provider value={{ loginApiCall }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
