import { createGlobalStyle } from "styled-components";
// import reggae from "../Fonts/Reggae_One/ReggaeOne-Regular.ttf"
import { aboreto_bold, aboreto_medium, aboreto_regular, glagolitic_regular } from "../Fonts";

export const Reset = createGlobalStyle`


    /* aboreto */
    @font-face {
        font-family: aboreto-bold;
        src: url(${aboreto_bold});
    }
    @font-face {
        font-family: aboreto-medium;
        src: url(${aboreto_medium});
    }
    @font-face {
        font-family: aboreto-regular;
        src: url(${aboreto_regular});
    }

    /* Glagolitic */
    @font-face {
        font-family: glagolitic-regular;
        src: url(${glagolitic_regular});
    }


    :root{

        /* primary green */
        --green-dark: #125A06;
        --green-light: #22E303;
        --green: #1B9F05;

         /* Status Color */
        --Sucess:#28A745;
        --Danger:#DC3545;
        --Warning:#FFC107;

        /* Gray Color */
        --Gray-900:#212121;
        --Gray-800:#4A4A4A;
        --Gray-700:#777777;
        --Gray-600:#A4A4A4;
        --Gray-500:#D2D2D2;
        --Gray-400:#E8E8E8;
        --Gray-300:#F6F6F6;
        --Gray-200:#FBFBFB;
    }


    *{
        font-family: aboreto-medium;
        margin: 0;
        padding: 0;
        
    }
`