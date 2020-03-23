import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const navVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0.1px at 0.1px 0.1px)",
    transition: {
      delay: 0.15,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Li = styled(motion.li)`
  padding: 7.5px;
  border: 1px solid blue;

  a {
    ${({ theme: { linkFont } }) => linkFont};
    ${({ theme: { fontLine } }) => fontLine(16, 20)};
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 50px;
  right: 50px;

  button {
    background-color: none;
    cursor: pointer;
  }

  svg {
    height: 100px;
    width: 100px;
    /* transition: ${({ theme: { transitionMain } }) => transitionMain}; */
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    bottom: 50px;
    transform-origin: bottom right;
  }
`;

export const Nav = styled(motion.nav)`
  margin-top: 12.5px;
  background-color: white;
  padding: 5px;
  transform-origin: top;
`;
