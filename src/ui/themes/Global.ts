import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {     
    background-color: ${({ theme }) => theme.theme.bg};
    font-size: 16px;

     margin: 0;
     padding: 0

  
     
    }
    
    html,
    body {
      overflow-x: hidden;
    }
`;
