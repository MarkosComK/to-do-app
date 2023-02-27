import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #2f74c0;
    }
    header {
        text-transform: uppercase;
        font-size: 40px;
        margin: 30px 0;
        color: white;
        z-index: 1;
        text-align: center;
    }
 
 
`