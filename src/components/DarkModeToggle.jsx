import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css" 
import styled from "styled-components";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDark, setIsDark] = useState(prefersDark);

    return(
        <Toggle
            checked={isDark}
            onChange={({target}) => {setIsDark(target.checked)}}
            icons={{ checked: "🌙", unchecked: "🔆" }}
        />
    );

}

export default DarkModeToggle;