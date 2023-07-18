import * as React from "react"
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { GlobalStyles } from "./GlobalStyles";



const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
}
const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
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