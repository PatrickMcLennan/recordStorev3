import { useContext } from "react";

import { IUser } from "dictionary";

import { UserContext } from "Context/UserContext";

export const useUser: () => IUser = () => useContext(UserContext);
