import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto';
  }
`;

export default GlobalStyle;









