import styled from "styled-components";
import { motion } from "framer-motion";

const heightArray: number[] = [300, 325, 350, 375, 400, 425, 450];
const heightNumber: Function = (): number =>
  Math.floor(Math.random() * (heightArray.length - 1));

const height: number = heightArray[heightNumber()];

export const liVariants = {
  expanded: {
    width: "calc(100% - 30px)",
    height: `${height * 2}px`,
    position: `absolute`,
    top: `0px`
  },
  preview: {
    position: `static`,
    width: `40%`,
    height: `${height}px`
  }
};

export const Figure = styled.figure`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

export const FigureAuthor = styled.span`
  ${({ theme: { fontLine } }) => fontLine(16, 20)};
  width: 100%;
  margin: 10px 0 5px 0;
  font-family: "Lato", "Lato-Light", sans-serif;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const FigCaption = styled.figcaption`
  flex: 1;
`;

export const FigureImage = styled.img`
  display: inline-block;
  margin-top: 7.5px;
  width: calc(50% - 10px);
  height: 50%;
`;

export const FigureTitle = styled.span`
  ${({ theme: { fontLine } }) => fontLine(38, 42)};
  display: inline-block;
  width: 50%;
  text-align: left;
  margin-left: 5px;
  transform: translateY(-10%);
  vertical-align: top;
`;

export const H1 = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(40, 48)}
  ${({ theme: { borders } }) => borders(`white`)}
  margin-top: 6vh;
`;

export const Li = styled(motion.li)`
  ${({ theme: { fontLine } }) => fontLine(14, 18)}
  position: relative;
  display: inline-block;
  border: 1px solid white;
  width: 50%;
  margin: 3px;
  padding: 20px 15px;
  background-color: rgba(0, 0, 0, 0.3);

  span:first-of-type {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  span:nth-of-type(2) {
    ${({ theme: { fontLine } }) => fontLine(16, 20)};
  }
`;

export const Ol = styled.ol`
  ${({ theme: { flex } }) => flex(`stretch`, `flex-start`, `column`, `wrap`)};
  flex: 1;
  max-height: 50%;
  overflow: hidden;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 50px;
`;
