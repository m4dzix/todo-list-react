import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const Nav = styled.nav`
  margin: 5px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.spicyMix};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  list-style: none;
  text-shadow: 2px 2px 1px ${({ theme }) => theme.colors.mineShaft};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Item = styled.li`
  font-size: 18px;
  margin: 10px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  &.${activeClassName} {
    background-color: ${({ theme }) => theme.colors.tan};
    border-radius: 7px;
    border: 2px solid ${({ theme }) => theme.colors.black};
    box-shadow: 2px 1px 2px 2px
      ${({ theme }) => theme.colors.lightTransparentBlack};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.mineShaft};
    padding: 2px;
  }
`;
