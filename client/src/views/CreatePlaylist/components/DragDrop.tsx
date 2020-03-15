import React, { Dispatch, FC, SetStateAction } from "react";
import { ReactSortable } from "react-sortablejs";
import AsyncSelect from "react-select/async";

import { compareString } from "Utility/functions";

import { IApiSong } from "dictionary";
import { IPlaylistSong } from "../CreatePlaylist";

interface IHelpers {
  filterSongs: Function;
  promiseOptions: Function;
}

interface IProps {
  rearrange: Dispatch<SetStateAction<IApiSong[]>>;
  songs: IApiSong[];
}

const filterSongs: Function = (input: string, songs: IApiSong[]): IApiSong[] =>
  songs.filter(({ title }: IApiSong): boolean =>
    compareString(input).includes(compareString(title))
  );

const promiseOptions: Function = (inputValue: string): Promise<IApiSong[]> =>
  new Promise(resolve => {
    // Return here to make api call
    setTimeout(() => resolve(filterSongs(inputValue)), 1000);
  });

const DragDrop: FC<IProps> = ({ rearrange, songs }: IProps): JSX.Element => {
  return (
    <ReactSortable
      animation={275}
      fallbackOnBody={true}
      group={{ name: "playlist" }}
      tag="ol"
      list={songs}
      setList={rearrange}
      swap
    >
      {songs.map(({ artist, id, title }: IApiSong) => (
        <li key={id}>
          <AsyncSelect loadOptions={(input: string) => promiseOptions(input)} />
        </li>
      ))}
    </ReactSortable>
  );
};

export default DragDrop;
export const helpers: IHelpers = {
  filterSongs,
  promiseOptions
};
