import * as React from "react"
import { useState } from "react";
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

const ThemeProvider = () => {

    const prefersDark = localStorage.getItem('theme') ? localStorage.getItem('theme') === "true" : window.matchMedia('(prefers-color-scheme: dark)').matches;

    console.log(prefersDark);
    console.log(localStorage.getItem('theme'));
    console.log(typeof localStorage.getItem('theme'));
    console.log(!!localStorage.getItem('theme'));    console.log( window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkTheme, setIsDarkTheme] = useState(prefersDark);

    const setThemeFunction = (darkTheme) => {

        localStorage.setItem('theme', darkTheme);
        setIsDarkTheme(darkTheme);

    }

    return(
        <div>
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />

            <DarkModeToggle isToggled={isDarkTheme} toggleFunction={setThemeFunction} />
        </div>
    );
    

}

export default ThemeProvider;