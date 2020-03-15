import { css } from "styled-components";
import { variables } from "./variables.style";

export const mixins: Object = {
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
  `
};
