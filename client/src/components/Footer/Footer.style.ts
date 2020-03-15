import styled from "styled-components";

export const Footer = styled.footer`
  ${({ theme: { flex } }) => flex(`space-between`)}
  position: absolute;
  bottom: 0;
  width: 100%;
`;
