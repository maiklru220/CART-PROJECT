import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
   *,
   *::before,
   *::after{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }
 

   body{
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 0;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Weight','Roboto', 'inter', 'Oxygen',
       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

   }
  
`