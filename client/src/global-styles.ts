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
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        transition: all 0.5s ease;
          &:hover {
              filter: opacity(0.5);
            }
        }
    input{
        background: ${({ theme }) => theme.toggleBackground};
    }
    ol, ul, li {
        list-style: none;
    }
    a {
        cursor: pointer;
        color: ${({ theme }) => theme.text};
        transition: all 0.5s ease;
          &:hover {
              filter: opacity(0.3);
            }
    }
`;
