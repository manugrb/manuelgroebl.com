import * as React from "react"
import { Box, Link } from "rebass"
import styled from "styled-components"

const WrapperLink = styled(Link)`
    text-decoration: none;
`

const ContainerBox = styled(Box)`
    width: 100%;
    background: inherit;
    padding: 1rem 0 2rem 0;
    border-radius: 0px;
    border: solid;
    border-width: 0 0 2px 0;
    border-color: var(--separatorColor);

    &:hover{
        cursor: pointer;
    }

`

const TitleLink = styled.h3`
    line-height: 32px;
    padding-bottom: 8px;
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--textHighlight);
    text-decoration: none;
    ${ContainerBox}:hover & {
        text-decoration: underline;
    }
`

const InfoParagraph = styled.p`
    margin: 0;
    font-size: 16px;
    color: var(--textUnimportant);
    text-decoration: none !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const BlogpostHomepagePreview = (props) => {

    return(
        <WrapperLink
        href={props.href}
        >
            <ContainerBox>
                <TitleLink>{props.title}</TitleLink>
                <InfoParagraph>{props.date}</InfoParagraph>
            </ContainerBox>
        </WrapperLink>
    );

}

export default BlogpostHomepagePreview;