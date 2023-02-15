import * as React from "react"
import { Box, Link } from "rebass"
import styled from "styled-components"

const ContainerBox = styled(Box)`
    max-width: 350px;
    background: #6644aa;
    padding: 2rem 2rem;
    border-radius: 6px;

    &:hover{
        box-shadow: 4px 4px 12px 4px #ddd;
        cursor: pointer;
    }

`

const TitleLink = styled.h3`
    line-height: 32px;
    padding-bottom: 8px;
    margin: 0;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    color: #fff;
    text-decoration: none;
    ${ContainerBox}:hover & {
        text-decoration: underline;
    }
`

const DescriptionParagraph = styled.p`
    margin: 0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fff;
`

const Project = (props) => {

    return(
        <Link
        href={props.href}
        >
            <ContainerBox>
                <TitleLink>{props.title}</TitleLink>
                <DescriptionParagraph>{props.description}</DescriptionParagraph>
            </ContainerBox>
        </Link>
    );

}

export default Project