import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { IPlaylist } from "dictionary";

import { useUser } from "Hook/useContext";

import * as S from "../Home.style";

interface IProps {
  homeDispatch: Dispatch<any>;
}

const Feed: FC<IProps> = ({ homeDispatch }): JSX.Element => {
  const [currentlyOpen, setCurrentlyOpen]: [
    number[],
    Dispatch<SetStateAction<number[]>>
  ] = useState([0]);
  const { playlists } = useUser();

  const toggleOpen = ({ currentTarget: { dataset } }) =>
    setCurrentlyOpen((prevOpen: number[]): number[] => {
      const selected: number = Number(dataset.state);
      if (prevOpen.includes(selected))
        return prevOpen.filter(
          (number: number): boolean => number !== selected
        );
      else return [...prevOpen, selected];
    });

  if (!playlists.length) return <span>You have no playlists</span>;
  else
    return (
      <S.Ul>
        {playlists.map(({ author, title }: IPlaylist, key: number) => (
          <S.Li
            animate={currentlyOpen.includes(key) ? `expanded` : `preview`}
            data-state={key}
            key={key}
            layoutTransition={{ type: "spring", damping: 20, stiffness: 2000 }}
            onClick={toggleOpen}
            variants={S.liVariants}
          >
            <S.Figure>
              <S.FigureAuthor>
                {author.firstName} {author.lastName}
              </S.FigureAuthor>
              <S.FigureTitle>{title}</S.FigureTitle>
              <S.FigureImage />

              <S.FigCaption>
                <S.Ol>
                  {Array.from(
                    { length: currentlyOpen.includes(key) ? 10 : 4 },
                    () => null
                  ).map((_: null, i: number) => (
                    <S.Li key={i}>
                      <span>{`${i}`}</span>
                      <span>Song title #{i}</span>
                    </S.Li>
                  ))}
                </S.Ol>
              </S.FigCaption>
            </S.Figure>
          </S.Li>
        ))}
      </S.Ul>
    );
};

export default Feed;
