import React, { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import * as S from "../Nav.style";

interface IProps {
  i: number;
  text: string;
  title: string;
  url: string;
}

const NavLi: FC<IProps> = ({ i, text, title, url }: IProps): JSX.Element => {
  return (
    <S.Li
      key={i}
      variants={S.liVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.099 }}
    >
      <Link aria-label={title} title={title} to={url}>
        {text}
      </Link>
    </S.Li>
  );
};

export default NavLi;
