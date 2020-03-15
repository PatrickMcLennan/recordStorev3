import styled, { css, StyledComponent } from "styled-components";
import { ILabelProps } from "dictionary";

export const H1 = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(40, 50)}
`;

// - Form - //
export const Label = styled.label<ILabelProps>`
  ${({ theme: { fontLine } }) => fontLine(14, 18)}
  ${({ error, theme: { labelWithError } }) => labelWithError(error)}

  span {
    display: block;

    sup {
      line-height: 14px;
    }
  }

  input {
    ${({ error, theme: { textInput } }) => textInput(error)}
    ${({ theme: { fontLine } }) => fontLine(16, 20)}
  }
`;
