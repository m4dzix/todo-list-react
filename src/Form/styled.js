import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 30px 50px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: hsl(34, 41%, 68%);
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.7);
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
`;
export const Input = styled.input`
  padding: 7px 0;
  border: 2px solid black;
  border-radius: 7px;
  width: 100%;
`;
export const Button = styled.button`
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  padding: 7px 0;
  background-color: hsl(34, 84%, 15%);
  font-size: 15px;
  border: 2px solid black;
  color: white;
  border-radius: 7px;
  box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.4);
  text-shadow: 1px 1px 2px #222;
  transition: 0.3s;

  &:hover {
    background-color: hsl(34, 84%, 11%);
    cursor: pointer;
    transform: scaleX(1.1);
  }

  @media (max-width: 414px) and (orientation: portrait) {
    margin: 30px 10px;
    grid-template-columns: none;
    grid-auto-flow: row;
    grid-template-columns: 1;
    justify-content: center;
  }
`;
