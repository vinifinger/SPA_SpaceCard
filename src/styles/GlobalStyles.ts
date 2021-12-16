import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary: #3f51b5;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;
    
        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;

        --background: #f8f9fa;
    
        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;

        --linkedin: #0e76a8;
        --instagram: #fbad50;
        --whatsApp: #25D366;
        --twitter: #1DA1F2;
        --youtube: #FF0000;
        --telegram: #0088cc;


        --link: #5d80d6;
    
        --rocketseat: #6633cc;
    }

    .linkedinIcon {
        color: var(--linkedin);
    }

    .instagramIcon {
        color: var(--mention-message);
    }

    .whatsAppIcon {
        color: var(--whatsApp);
    }

    .twitterIcon {
        color: var(--twitter);
    }

    .youtubeIcon {
        color: var(--youtube);
    }

    .telegramIcon {
        color: var(--telegram);
    }

`;