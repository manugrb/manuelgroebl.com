import * as React from "react"
import { useState } from "react";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import { GlobalStyles } from "./GlobalStyles";

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

    const prefersDark = window.sessionStorage.getItem('theme') ? window.sessionStorage.getItem('theme') === "true" : window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDarkTheme, setIsDarkTheme] = useState(prefersDark);

    const setThemeFunction = (darkTheme) => {

        window.sessionStorage.setItem('theme', darkTheme);
        setIsDarkTheme(darkTheme);

    }

    return(
        <ToggleContainer>
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />

            <DarkModeToggle isToggled={isDarkTheme} toggleFunction={setThemeFunction} />
        </ToggleContainer>
    );
    

}

export default ThemeProvider;