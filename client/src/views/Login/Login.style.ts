import styled, { css, StyledComponent } from "styled-components";
import { ILabelProps } from "dictionary";

export const H1 = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(50, 40)}
  margin-top: 25vh;
  font-family: "Lato-Light", "Lato", sans-serif;
  letter-spacing: 2.5px;
  text-align: center;
`;

export const Form = styled.form`
  ${({ theme: { flex } }) => flex(`center`, `stretch`, `column`)};
  margin: 12.5vh 20% 0 20%;

  @media screen and (max-width: 1000px) {
    margin: 12.5vh 0 0 0;
  }
`;

// - Form - //
export const Label = styled.label<ILabelProps>`
  ${({ theme: { fontLine } }) => fontLine(14, 18)}
  ${({ error, theme: { labelWithError } }) => labelWithError(error)};
  ${({ theme: { flex } }) => flex(`flex-start`, `stretch`, `column-reverse`)}
  margin-bottom: 20px;

  span {
    ${({ theme: { flex } }) => flex(`center`, `flex-start`)};
    ${({ theme: { fontLine } }) => fontLine(14, 18)};
    width: 100%;
    font-style: italic;
    letter-spacing: 0.5px;
    text-align: center;
    sup {
      margin-left: 5px;
      padding-bottom: 2.5px;
    }
  }

  input {
    ${({ error, theme: { textInput } }) => textInput(error)}
    ${({ theme: { fontLine } }) => fontLine(16, 20)}
    display: block;
    margin-bottom: 10px;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-family: inherit;
  }
`;

export const Submit = styled.input`
  ${({ theme: { fontLine } }) => fontLine(18, 22)}
  display: block;
  margin: 6.25vh auto 0 auto;
  padding: 11px 30px;
  font-family: inherit;
  background: none;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: ${({ theme: { transitionMain } }) => transitionMain};

  &:hover {
    background-color: white;
    color: blue;
  }
`;
