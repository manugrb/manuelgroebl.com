import * as React from "react"
import { useState } from "react";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import "../css/globalStyles.css";

const lightTheme = {
    body: '#f6f7f8',
    textHighlight: '#222222',
    textNormal: '#444444',
    textUnimportant: '#888888',
    separatorColor: 'rgba(0,0,0,0.1)',
    shadowColor: '#dddddd',
    footerColor: '#ffffff'
}
const darkTheme = {
    body: '#121212',
    textHighlight: '#ffffff',
    textNormal: '#e6e6e6',
    textUnimportant: '#a7a7a7',
    separatorColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#060606',
    footerColor: '#191919'
}

const ToggleContainer = styled.div`
    padding-top: 6px;
`

const ThemeProvider = () => {

    const isBrowser = typeof window !== "undefined";

    const prefersDark = isBrowser ? window.__theme === "dark" : false;

    const [isDarkTheme, setIsDarkTheme] = useState(prefersDark);

    const setThemeFunction = (darkTheme) => {

                if(isBrowser){
            window.sessionStorage.setItem('theme', darkTheme);
            setIsDarkTheme(darkTheme);
        }

    }


    return(
        <ToggleContainer>
            <DarkModeToggle isToggled={isDarkTheme} toggleFunction={setThemeFunction} />
        </ToggleContainer>
    );
    

}

export default ThemeProvider;