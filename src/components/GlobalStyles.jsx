import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

    :root{
        --background: ${({ theme }) => theme.body};
        --textHighlight: ${({ theme }) => theme.textHighlight};
        --textNormal: ${({ theme }) => theme.textNormal};
        --textUnimportant: ${({ theme }) => theme.textUnimportant};
        --shadowColor: ${({ theme }) => theme.shadowColor};
        --footerColor: ${({ theme }) => theme.footerColor};
    }

    body {
        background: ${({ theme }) => theme.body};
        transition: all 0.50s linear;
    }
`