import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-image: url(https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_960_720.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
`;
