import React, { FC } from "react";

import { useUser } from "Hook/useContext";

import { INotification } from "dictionary";
import * as S from "./Nav.style";

const Nav: FC = (): JSX.Element => {
  const { notifications } = useUser();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <S.NavLink
              aria-label="Create a Playlist"
              title="Create a Playlist"
              to="/makePlaylist"
            >
              Create
            </S.NavLink>
          </li>
        </ul>
        <ol>
          {notifications.map(
            ({ from, message, link }: INotification): JSX.Element => (
              <li>
                <span>{from}</span>
                <span>{message}</span>
                <span>{link}</span>
              </li>
            )
          )}
        </ol>
      </nav>
    </header>
  );
};

export default Nav;
