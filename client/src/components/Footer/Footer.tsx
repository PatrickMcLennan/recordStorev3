import React, { FC } from "react";

import * as S from "./Footer.style";

const Footer: FC = (): JSX.Element => (
  <S.Footer>
    <span data-testid="name">{`Made by ${process.env.AUTHOR_NAME}`}</span>

    <ul>
      <li>
        <a
          aria-label={`${process.env.AUTHOR_EMAIL} Github`}
          data-testid="github"
          href="www.github.com/patrickmclennan"
          rel="noreferrer"
          title={`${process.env.AUTHOR_EMAIL} Github`}
          target="_blank"
        ></a>
      </li>
      <li>
        <a
          aria-label={`${process.env.AUTHOR_EMAIL} LinkedIn`}
          data-testid="linkedin"
          // - Correct this later - //
          href="www.linkedin.com/patrickmclennan"
          // - ^^ - //
          rel="noreferrer"
          title={`${process.env.AUTHOR_EMAIL} LinkedIn`}
          target="_blank"
        ></a>
      </li>
      <li>
        <a
          aria-label={`Email ${process.env.AUTHOR_NAME}`}
          data-testid="email"
          href={`mailto:${process.env.AUTHOR_EMAIL}`}
          rel="noreferrer"
          title={`Email ${process.env.AUTHOR_NAME}`}
        ></a>
      </li>
    </ul>
  </S.Footer>
);

export default Footer;
