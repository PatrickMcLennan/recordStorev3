import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  ${({ theme: { linkFont } }) => linkFont};
  display: inline-block;
`;

export const Li = styled.li``;
