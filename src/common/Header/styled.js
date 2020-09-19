import styled from "styled-components";

export const Title = styled.h1`
  padding: 10px;
  font-family: "Galada", cursive;
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;
  border: 5px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.spicyMix};
  box-shadow: 5px 5px 2px 2px
    ${({ theme }) => theme.colors.lightTransparentBlack};
  text-shadow: 4px 4px 2px ${({ theme }) => theme.colors.mineShaft};
  letter-spacing: 2pxF;
`;
