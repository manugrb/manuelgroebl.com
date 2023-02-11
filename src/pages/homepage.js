import React from "react";
import styled from "styled-components";

const BaseHeader = styled.h1`
    color: purple;
    width: 100%;
    text-align: center;
    padding-top: 10%;
`   

const HomePage = () => {

    return(
        <div>
            <BaseHeader>This is my homepage</BaseHeader>
        </div>
    )

}

export default HomePage