import {createGlobalStyle} from 'styled-components';

import Bkg1 from '../assets/background-1.png';
import Bkg2 from '../assets/background-2.png';

const globalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #F8FDFF; // This sets the background color
        background: url('${Bkg2}') no-repeat 600px, url('${Bkg1}') no-repeat 550px;
        background-size: cover;
        font-family: 'Poppins', sans-serif;
    }

    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
` ;

export default globalStyle;