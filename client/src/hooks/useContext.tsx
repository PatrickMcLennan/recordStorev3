import { useContext } from "react";

import { IUser } from "dictionary";

import { ApiContext, IApiContext } from "Context/ApiContext";
import { UserContext } from "Context/UserContext";

export const useApi: () => IApiContext = () => useContext(ApiContext);
export const useUser: () => IUser = () => useContext(UserContext);
