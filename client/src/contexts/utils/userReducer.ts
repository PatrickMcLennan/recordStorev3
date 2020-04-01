import { Reducer } from "react";
import { IUser, IPlaylist } from "dictionary";
import { mockUsers } from "Utility/mockData";

type ValueOf<T> = T[keyof T];

export const initialUser: IUser = {
  notifications: [],
  email: "",
  firstName: "",
  lastName: "",
  playlists: mockUsers.map(
    (user: IUser, i: number): IPlaylist => ({
      author: user,
      title: `playlist-${i}`
    })
  )
};

export interface IReducerArgs {
  type: keyof IUser | string;
  payload: ValueOf<IUser>;
}

export const userReducer: Reducer<IUser, IReducerArgs> = (
  state: IUser,
  { type, payload }
) => {
  switch (type) {
    default:
      if (Object.prototype.hasOwnProperty.call(state, type))
        return {
          ...state,
          [type]: payload
        };
      else
        throw new Error(
          `userReducer was passed ${type.toString()} and ${payload.toString()}, something's wrong`
        );
  }
};
