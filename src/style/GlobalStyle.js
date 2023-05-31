import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
    background-color: #F2F2F2;
    }

    *{
        box-sizing: border-box;
    }
`

export default GlobalStyle;