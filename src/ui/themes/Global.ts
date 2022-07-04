import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {     
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
     margin: 0;
     padding: 0;
     color: ${({ theme }) => theme.theme.font};
    
    

  
     
    }
    
    html,
    body {
      overflow-x: hidden;
      background: ${({ theme }) => theme.theme.shape};
    
    }
`;
