import { css } from "styled-components";
import { variables } from "./variables.style";

const TABLET: number = 1000;
const MOBILE: number = 600;

export const mixins: any = {
  // - Fonts - //
  fontLine: (size: number, height: number) => css`
    font-size: ${size}px;
    line-height: ${height}px;
  `,

  // - Inputs - //
  textInput: (error: boolean) => css`
    background-color: none;
    border-bottom: 2px solid ${error ? variables.redError : "black"};
  `,

  // - Labels w/ Errors - //
  labelWithError: (error: boolean) => css`
    span {
      sup {
        color: inherit;
        ${error &&
          css`
            color: ${variables.redError};
          `}
      }
    }
  `,

  // - Layout - //
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  flex: (
    jc: string = `center`,
    ai: string = `center`,
    fd: string = `row`,
    fw: string = `nowrap`
  ) => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${fw};
  `,
  mainPadding: css`
    padding: 0 5%;

    @media screen and (max-width: ${TABLET}px) {
      padding: 0 5%;
    }
    @media screen and (max-width: ${MOBILE}px) {
      padding: 0 15px;
    }
  `,

  // - Links - //
  linkAfter: css`
    position: relative;

    &::after {
      height: 1px;
      width: 0%;
      position: absolute;
      top: calc(100% - 1px);
      bottom: 0;
      left: 0;
      right: 100%;
      transition: ${variables.transitionMain};
    }

    &:hover &::after {
      width: 100%;
    }
  `,
  linkFont: css`
    text-transform: uppercase;
    letter-spacing: 1px;
  `,

  borders: (color: string) => css`
    display: inline-block;
    padding: 7.5px;
    position: relative;
    transition: ${({ theme: { transitionMain } }) => transitionMain};

    &::before,
    &::after {
      position: absolute;
      content: "";
      display: block;
      background-color: ${color};
      opacity: 1;
    }

    &::before {
      top: 10%;
      right: 0;
      bottom: -10%;
      left: calc(100% - 1px);
      width: 1px;
    }

    &::after {
      top: calc(100% - 1px);
      right: -10%;
      bottom: 0;
      left: 10%;
      height: 1px;
    }
  `
};
