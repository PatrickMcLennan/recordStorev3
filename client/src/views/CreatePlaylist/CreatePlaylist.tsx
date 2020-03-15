import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import DragDrop from "./components/DragDrop";

import { IApiSong } from "dictionary";

interface IHelpers {
  changeOrder: Function;
}

export interface IPlaylistSong extends IApiSong {
  order: number;
}

const changeOrder: Function = (songList: IApiSong[]): IPlaylistSong[] =>
  songList.map((song: IApiSong, i: number) => ({
    ...song,
    order: i
  }));

const mockSongs: IPlaylistSong[] = [
  { artist: "Lynard Skynard", id: 1, order: 1, title: "Freebird" },
  { artist: "jhfly", id: 2, order: 2, title: "Learjets and Coupes" }
];

const CreatePlaylist: FC = (): JSX.Element => {
  const { errors, register, handleSubmit } = useForm();
  const [songs, setSongs] = useState(mockSongs);

  const rearrange: Dispatch<SetStateAction<IApiSong[]>> = (
    newOrder: IApiSong[]
  ): void => setSongs(changeOrder(newOrder));

  return (
    <>
      <h1>Create a New Playlist</h1>
      <form>
        <label htmlFor="title">
          <span>
            Title: <sup>*</sup>
          </span>
          <input name="title" ref={register({ required: true })} type="text" />
        </label>
        <DragDrop rearrange={rearrange} songs={songs} />
      </form>
    </>
  );
};

export default CreatePlaylist;
export const helpers: IHelpers = {
  changeOrder
};
