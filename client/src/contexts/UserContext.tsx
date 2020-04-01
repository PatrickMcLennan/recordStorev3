import React, {
  createContext,
  Context,
  FC,
  ReactChildren,
  useReducer,
  Dispatch
} from "react";
import { IUser } from "dictionary";
import { initialUser, userReducer, IReducerArgs } from "./utils/userReducer";

interface IProps {
  children: ReactChildren;
}

interface IUserContext extends IUser {
  login: Function;
  userDispatch: Dispatch<IReducerArgs>;
}

export const UserContext: Context<IUserContext> = createContext(
  {} as IUserContext
);

const UserContextProvider: FC<IProps> = ({ children }: IProps): JSX.Element => {
  const [userState, userDispatch] = useReducer(userReducer, initialUser);

  const login: Function = () => console.log("hello");

  return (
    <UserContext.Provider value={{ login, userDispatch, ...userState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
