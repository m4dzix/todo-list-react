import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 30px 50px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.tan};
  box-shadow: 2px 2px 3px 3px
    ${({ theme }) => theme.colors.darkTransparentBlack};
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.maxWidth}px) and (orientation: portrait) {
    grid-template-columns: 1fr;
    margin: 10px 20px;
  }
`;

export const SearchForm = styled(StyledForm)`
  grid-template-columns: 1fr;
`;

export const Input = styled.input`
  padding: 7px 0;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 7px;
  width: 100%;
`;

export const Button = styled.button`
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  padding: 7px 0;
  background-color: ${({ theme }) => theme.colors.darkEbony};
  font-size: 15px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  box-shadow: 2px 1px 2px 2px
    ${({ theme }) => theme.colors.lightTrnsparentBlack};
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.mineShft};
  transition: 0.3s;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    transform: scaleX(1.1);
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.maxWidth}px) and (orientation: portrait) {
    margin: 5px 10px;
    grid-template-columns: none;
    grid-auto-flow: row;
    grid-template-columns: 1;
    justify-content: center;
  }
`;
