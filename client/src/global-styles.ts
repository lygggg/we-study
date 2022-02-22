import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface ThemeInterface {
  theme: {
    body: string;
    text: string;
    toggleBackground: string;
    mainColor: string;
    header: string;
  };
}

export const GlobalStyle = createGlobalStyle<ThemeInterface>`
${reset}

    * {
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.5s ease-in-out;
    }

    header {
        color: ${({ theme }) => theme.text};
        background: ${({ theme }) => theme.header};
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
    }
    ol, ul, li {
        list-style: none;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${({ theme }) => theme.text};
    }
    img {
        width: 100%;
        height: 100%;
    }
`;
