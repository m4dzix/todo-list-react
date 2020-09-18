import styled, { css } from "styled-components";
import {Link} from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 5px;

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.maxWidth}px) and (orientation: portrait) {
    padding: 0px;
  }
`;
export const Item = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}

  @media (max-width: ${({ theme }) =>
    theme.breakpoints.maxWidth}px) and (orientation: portrait) {
    margin: 0;
    max-width: 100%;
  }
`;
export const Button = styled.button`
  border: none;
  width: 100%;
  max-width: 30px;
  height: 30px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.chartreuse};
  box-shadow: 0.5px 0.5px 3px 3px ${({ theme }) => theme.colors.black};

  ${({ doneTasks }) =>
    doneTasks &&
    css`
      background-color: ${({ theme }) => theme.colors.chartreuse};
      transition: 0.3s;
      transition: 0.3s;

      &:hover {
        filter: brightness (110%);
      }
      &:active {
        filter: brightness(120%);
      }
    `};

  ${({ removeTasks }) =>
    removeTasks &&
    css`
      background-color: ${({ theme }) => theme.colors.crimson};

      &:hover {
        filter: brightness(110%);
      }
      &:active {
        filter: brightness(120%);
      }
    `};
`;
export const Icon = styled.i`
  font-family: "FontAwesome";
  font-style: normal;
  font-size: 20px;
`;
export const Content = styled.p`
  padding: 5px 15px;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `};
`;

export const StyledLink = styled(Link)`
color:${({ theme }) => theme.colors.black};
text-decoration:none;
&.hover{
  cursor:pointer;
}
`