import * as React from "react"
import { Box, Link } from "rebass"
import styled from "styled-components"
import Layout from "../components/layout"
import Frame from "./Frame"

const Wrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
`

const PostContainer = styled(Box)`
    max-width: 666px;
    justify-content: center;
`

const HeadingContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 16px;
    padding-top: 32px;
`

const BlogHeading = styled.h2`
    font-size: 32px;
    line-height: 1;
    margin: 0px;
`

const BlogDate = styled.h4`
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    padding-top: 8px;
    color: #bbbbbb;
    font-weight: 300;
`

const BackLink = styled(Link)`
    font-size: 16px;
    font-weight: 600;
    margin: 0px;
    margin-bottom: 24px;
    text-decoration: none;
    text-transform: uppercase;
    color: #3867d6;

    &:hover{
        cursor: pointer;
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }

`

const MainTextContainer = styled(Box)`
    text-align: justify;
    text-justify: inter-word;
`

const defaultKeywords = "Manuel Groebl, Manuel Grobl, Manuel Gröbl, manugrb, Blog";

const BlogPost = (props) => {

    const {meta, children} = props;

    return (
        <Frame
            title={meta.title + " - Manuel Gröbl"}
            description={meta.summary}
            author={meta.author}
            keywords={meta.keywords + defaultKeywords}
        >
            <Layout>
                <Wrapper>
                    <PostContainer>
                        <BackLink href="/blog">Back to Blog</BackLink>
                        <HeadingContainer>
                            <BlogHeading>{meta.title}</BlogHeading>
                            <BlogDate>Published {meta.releaseDate}</BlogDate>
                        </HeadingContainer>

                        <MainTextContainer>
                            {children}
                        </MainTextContainer>

                    </PostContainer>
                </Wrapper>
            </Layout>
        </Frame>
    );
}
 
export default BlogPost;