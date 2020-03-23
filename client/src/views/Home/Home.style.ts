import styled from "styled-components";
import { motion } from "framer-motion";

const heightArray: number[] = [300, 325, 350, 375, 400, 425, 450];
const heightNumber: Function = (): number =>
  Math.floor(Math.random() * (heightArray.length - 1));

export const liVariants = {
  expanded: {
    width: "calc(100% - 30px)",
    height: `550px`
  },
  preview: {
    width: `calc(33% - 10px)`,
    height: `${heightArray[heightNumber()]}px`
  }
};

export const Figure = styled.figure`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  border: 1px solid red;
`;

export const FigureAuthor = styled.span`
  ${({ theme: { fontLine } }) => fontLine(16, 20)};
  width: 100%;
  margin: 10px 0;
  border: 1px solid green;
  font-family: "Lato", "Lato-Light", sans-serif;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const FigCaption = styled.figcaption`
  border: 1px solid pink;
  flex: 1;
`;

export const FigureImage = styled.img`
  display: inline-block;
  margin-top: 7.5px;
  width: calc(50% - 10px);
  border: 1px solid blueviolet;
  height: 50%;
`;

export const FigureTitle = styled.span`
  ${({ theme: { fontLine } }) => fontLine(38, 42)};
  display: inline-block;
  width: 50%;
  text-align: left;
  margin-left: 5px;
  border: 1px solid yellow;
  vertical-align: top;
`;

export const H1 = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(40, 48)}
  ${({ theme: { borders } }) => borders(`white`)}
  margin-top: 6vh;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 50px;
`;

export const Li = styled(motion.li)`
  display: inline-block;
  border: 1px solid white;
  margin: 3px;
  padding: 15px;
`;
