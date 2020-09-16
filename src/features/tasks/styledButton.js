import styled from "styled-components";

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
