import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css" 
import styled from "styled-components";
import "./DarkModeToggle.css";

const DarkModeToggle = ({ isToggled, toggleFunction }) => {

    return(
        <Toggle
            checked={isToggled}
            onChange={({target}) => {toggleFunction(target.checked)}}
            icons={{ checked: "🌙", unchecked: "🔆" }}
        />
    );

}

export default DarkModeToggle;