import { ReducerWithoutAction, Reducer } from "react";
import { IPlaylist } from "dictionary";

type ValueOf<T> = T[keyof T];

interface IHomeState {
  currentPlaylist: IPlaylist;
  modalOpen: boolean;
}

export const homeState: IHomeState = {
  currentPlaylist: {
    author: {
      email: "",
      firstName: "",
      lastName: ""
    },
    title: ""
  },
  modalOpen: false
};

interface IReducerArgs {
  state: IHomeState;
  type: keyof IHomeState | string;
  payload: ValueOf<IHomeState> | any;
}

export const homeReducer: Reducer<IHomeState, IReducerArgs> = (
  state: IHomeState,
  { type, payload }: IReducerArgs
): IHomeState => {
  switch (type) {
    case `openModal`:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        currentPlaylist: payload.playlist
      };
    default:
      if (Object.prototype.hasOwnProperty.call(state, type))
        return {
          ...state,
          [type]: payload
        };
      else {
        throw new Error(
          `homeReducer recieved ${type.toString()} and ${payload.toString()}, something's wrong`
        );
      }
  }
};
