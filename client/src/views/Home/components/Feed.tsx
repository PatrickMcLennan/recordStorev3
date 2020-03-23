import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { IPlaylist } from "dictionary";

import * as S from "../Home.style";

interface IProps {
  playlists: IPlaylist[];
}

const Feed: FC<IProps> = ({ playlists }): JSX.Element => {
  const [currentlyOpen, setCurrentlyOpen]: [
    number[],
    Dispatch<SetStateAction<number[]>>
  ] = useState([0]);

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
            layoutTransition={{ type: "spring", damping: 20, stiffness: 1000 }}
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
                <ol>
                  {Array.from({ length: 10 }, () => null).map(
                    (_: null, i: number) => (
                      <li key={i}>{`${i}: Song #${i}`}</li>
                    )
                  )}
                </ol>
              </S.FigCaption>
            </S.Figure>
          </S.Li>
        ))}
      </S.Ul>
    );
};

export default Feed;
