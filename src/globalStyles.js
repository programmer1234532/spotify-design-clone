import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    height: 100%;
    overflow:hidden;
  }

  html::-webkit-scrollbar-track{
    background:black;
  }
`;
 
export default GlobalStyle;