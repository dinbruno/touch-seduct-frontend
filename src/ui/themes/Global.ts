import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {     
    background-color: ${({theme}) => theme.theme.bg};
    font-size: 16px;
}

`