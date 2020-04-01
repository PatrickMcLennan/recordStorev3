import React, { FC, useReducer } from "react";

import Feed from "./components/Feed";
import Modal from "./components/Modal";

import { homeState as initialState, homeReducer } from "./utils/homeReducer";
import * as S from "./Home.style";

const Home: FC = (): JSX.Element => {
  const [homeState, homeDispatch] = useReducer(homeReducer, initialState);
  return (
    <>
      <S.H1 data-testid="h1">Your Feed</S.H1>
      <Feed homeDispatch={homeDispatch} />
      <Modal
        currentPlaylist={homeState.currentPlaylist}
        homeDispatch={homeDispatch}
        isOpen={homeState.modalOpen}
      />
    </>
  );
};

export default Home;
