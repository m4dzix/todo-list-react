import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: hsl(34, 41%, 68%);
  border-radius: 7px;
  border: 3px solid black;
  box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.4);
  text-shadow: 1px 1px 2px #222;
  margin: 20px;

  @media (max-width: 414px) and (orientation: portrait) {
    margin: 10px;
  }
`;
