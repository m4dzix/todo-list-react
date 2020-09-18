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
  grid-template-columns: 1fr;

`;
export const Input = styled.input`
  padding: 7px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 7px;
`;

