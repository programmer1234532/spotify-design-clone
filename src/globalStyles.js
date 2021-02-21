import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body{
  height: 100vh;

  @media screen and (max-width:600px){
    overflow-y:hidden;      
  }
  }

  p{
    color: #bdbdbd;
  }
`;
 
export default GlobalStyle;