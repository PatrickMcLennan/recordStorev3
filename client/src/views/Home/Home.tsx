import React, { FC } from "react";
import StackGrid from "react-stack-grid";
import { IPlaylist } from "dictionary";

import Feed from "./components/Feed";

import { IUser } from "dictionary";

import { mockUsers } from "Utility/mockData";

import * as S from "./Home.style";

const playlists = mockUsers.map((user: IUser, i: number) => ({
  author: user,
  title: `playlist-${i}`
}));

const Home: FC = (): JSX.Element => {
  return (
    <>
      <S.H1 data-testid="h1">Your Feed</S.H1>
      <Feed playlists={playlists} />
    </>
  );
};

export default Home;
