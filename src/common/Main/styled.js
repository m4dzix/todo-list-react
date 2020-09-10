import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.dawnPink};
  padding-top: 20px;
  border: 4px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  box-shadow: 5px 5px 6px 6px ${({ theme }) => theme.colors.darkTrnsparentBlack};
  margin: 15px;
`;
