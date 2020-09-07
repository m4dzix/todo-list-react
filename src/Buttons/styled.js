import styled, { css } from "styled-components";

export const ToggleButtons = styled.section`
  background-color: ${({ theme }) => theme.colors.tan};
  border-radius: 7px;
  border: 3px solid black;
  box-shadow: 2px 1px 2px 2px
    ${({ theme }) => theme.colors.lightTransparentBlack};
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.mineShaft};
  display: flex;
  justify-content: flex-end;
  margin: 0 50px;
  padding: 5px;

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.maxWidth}px) and (orientation: portrait) {
    margin: 0px 10px;
  }

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.twine};
  text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.gallery};
  text-transform: uppercase;
  padding: 5px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.tan};
  }
  @media (max-width: ${({ theme }) =>
      theme.breakpoints.maxWidth}px) and (orientation: portrait) {
    margin: 10px;
    flex-direction: column;
  }
`;
