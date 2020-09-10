import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.tan};
  border-radius: 7px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 2px 1px 2px 2px
    ${({ theme }) => theme.colors.lightTransparentBlack};
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.mineShaft};
  margin: 20px;

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.maxWidth}px) and (orientation: portrait) {
    margin: 10px;
  }
`;
