import * as React from "react"
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { GlobalStyles } from "./GlobalStyles";

const lightTheme = {
    body: '#f6f7f8',
    textHighlight: '#222222',
    textNormal: '#444444'
}
const darkTheme = {
    body: '#121212',
    textHighlight: '#ffffff',
    textNormal: '#e6e6e6'
}

const ThemeProvider = () => {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDarkTheme, setIsDarkTheme] = useState(prefersDark);

    return(
        <div>
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />

            <DarkModeToggle isToggled={isDarkTheme} toggleFunction={setIsDarkTheme} />
        </div>
    );
    

}

export default ThemeProvider;