import React, { FC } from "react";
import { motion } from "framer-motion";
import { useUser } from "Hook/useContext";

import NavLi from "./components/NavLi";
import VinylSVG from "Component/svgs/VinylSVG";

import { useCycle } from "framer-motion";

import { INotification } from "dictionary";
import * as S from "./Nav.style";

const Nav: FC = (): JSX.Element => {
  const [showNav, setShowNav] = useCycle(false, true);
  const { notifications } = useUser();
  return (
    <>
      <S.Header>
        <button onClick={() => setShowNav()}>
          <VinylSVG />
        </button>
        <S.Nav
          animate={showNav ? "open" : "closed"}
          variants={S.navVariants}
          drag={true}
        >
          <motion.ul onClick={() => setShowNav()} variants={S.ulVariants}>
            <NavLi i={0} text="Home Page" title="Home Page" url="/" />
            <NavLi
              i={1}
              text="Create a Playlist"
              title="Create a Playlist"
              url="/createPlaylist"
            />
          </motion.ul>
          <ol>
            {notifications.map(
              (
                { from, message, link }: INotification,
                i: number
              ): JSX.Element => (
                <li key={i}>
                  <span>{from}</span>
                  <span>{message}</span>
                  <span>{link}</span>
                </li>
              )
            )}
          </ol>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Nav;
