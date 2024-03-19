import * as React from "react"
import { useState } from "react";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import "../css/globalStyles.css";

const ToggleContainer = styled.div`
    padding-top: 6px;
`

const ThemeProvider = () => {

    const isBrowser = typeof window !== "undefined";

    const prefersDark = isBrowser ? window.__theme === "dark" : false;

    const [isDarkTheme, setIsDarkTheme] = useState(prefersDark);

    const setThemeFunction = (darkTheme) => {
        window.__setPreferredTheme(darkTheme? 'dark' : 'light');
        if(isBrowser){
            window.sessionStorage.setItem('theme', darkTheme);
            setIsDarkTheme(darkTheme);
        }
    }

    return(
        <ToggleContainer>
            {isBrowser && <DarkModeToggle isToggled={isDarkTheme} toggleFunction={setThemeFunction} />}
        </ToggleContainer>
    );
    

}

export default ThemeProvider;