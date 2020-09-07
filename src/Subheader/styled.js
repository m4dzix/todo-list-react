import styled from "styled-components";

export const SubheaderTitle = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.gallery};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  padding: 20px;
  margin: 0 20px;
`;
