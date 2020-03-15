import React, { createContext, Context, FC, ReactNode } from "react";
import { INotification, IUser } from "dictionary";

import { useApi } from "Hook/useContext";

interface IProps {
  children: ReactNode;
}

interface IUserContext extends IUser {
  login: Function;
}

export const UserContext: Context<IUserContext> = createContext(
  {} as IUserContext
);

const UserContextProvider: FC<IProps> = ({ children }: IProps): JSX.Element => {
  const { loginApiCall } = useApi();

  const notifications: INotification[] = [];
  const email: string = "user@user.com";
  const firstName: string = "John";
  const lastName: string = "Doe";
  const playlists: any[] = [];

  const login: Function = () => loginApiCall;

  return (
    <UserContext.Provider
      value={{ email, firstName, lastName, login, notifications, playlists }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
