import * as React from "react"
import { Box, Link } from "rebass"
import styled from "styled-components"

const ContainerBox = styled(Box)`
    max-width: 350px;
    background: #6644aa;
    padding: 1rem 2rem;
    border-radius: 6px;

    &:hover{
        box-shadow: 4px 4px 12px 4px #ddd;
        cursor: pointer;
    }

`

const TitleLink = styled(Link)`
    font-size: 24px;
    font-weight: 800;
    color: #fff;
    text-decoration: none;
    ${ContainerBox}:hover & {
        text-decoration: underline;
    }
`

const DescriptionParagraph = styled.p`
    margin: 0;
    font-size: 18px;
    color: #fff;
`

const Project = (props) => {

    return(
        <ContainerBox>
            <TitleLink>{props.title}</TitleLink>
            <DescriptionParagraph>{props.description}</DescriptionParagraph>
        </ContainerBox>
    );

}

export default Project