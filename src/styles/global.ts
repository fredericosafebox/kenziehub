import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//Fontes do projeto
@import url('https://rsms.me/inter/inter.css');

//Reset CSS global
* {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none;
    font-family: 'Inter', sans-serif;
}

//Paleta de cores
:root {
    //Primary Palette
    --color-primary: 255, 87, 127; // #FF577F
    --color-primary-50: 255, 66, 127; //#FF427F
    --color-primary-disable: 89, 50, 63; //#59323F
    //Grey Scale Palette
    --pure-black: 0, 0, 0; //#000000
    --grey-0: 248, 249, 250; //#F8F9FA
    --grey-1: 134, 142, 150; //#868E96
    --grey-2: 52, 59, 65; //#343B41
    --grey-3: 33, 37, 41; //#212529
    --grey-4: 18, 18, 20; //#121214
    --pure-white: 255, 255, 255; //#FFFFFF
    //Feedback Palette
    --sucess: 63, 232, 100; //#3FE864
    --negative: 232, 63, 91; //#E83F5B
}

//Set do display do app
body {
    width: 100vw;
    height: 100vh;
}

#root { 
    width: 100%;
    height: 100%;
}

.App {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(var(--grey-4));
    overflow: hidden;
}

.framer--wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
