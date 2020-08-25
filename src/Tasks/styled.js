import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 5px;

  @media (max-width: 360px) and (orientation: portrait) {
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

  @media (max-width: 360px) and (orientation: portrait) {
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
  background-color: chartreuse;
  box-shadow: 0.5px 0.5px 3px 3px black;

  ${({ doneTasks }) =>
    doneTasks &&
    css`
      background-color: chartreuse;
      transition: 0.3s;
      transition: 0.3s;

      &:hover {
        background-color: hsl(90, 100%, 40%);
      }
      &:active {
        background-color: hsl(90, 100%, 30%);
      }
    `};

  ${({ removeTasks }) =>
    removeTasks &&
    css`
      background-color: crimson;

      &:hover {
        background-color: hsl(348, 83%, 37%);
      }
      &:active {
        background-color: hsl(348, 83%, 27%);
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
