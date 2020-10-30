import styled, { createGlobalStyle } from 'styled-components';

const StyledApp = styled.div`
    display: grid;
    height: 100vh;
    ${'' /* overflow: hidden; */}
    grid-template-rows: 50vh;
`;

export const NormalizedStyle = createGlobalStyle`
    ${'' /* @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Solway|Raleway|Montserrat&display=swap'); */}

    :root {
        font-size: 100%;
    }

    ${'' /* $page-colors: (
        0: 170, 120, 166,
        1: 184, 186, 200,
        2: 180, 214, 211,
        3: 178, 255, 214,
    ) */}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: 'Abril Fatface', cursive;
        color: rgba(0,0,0,.68);
    }

    a:link,
    a:active,
    a:visited,
    a:focus {
        text-decoration: none;
        color: none;
    }

    ul {
        list-style-type: none;
    }

    select, 
    input, 
    button,
    textarea {
        outline: none;
        border: none;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    button {
        cursor: pointer;
        background-color: transparent;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default StyledApp;