import * as React from "react"
import { Box } from "rebass"
import styled from "styled-components"

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
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding-top: 8px;
    color: #bbbbbb;
    font-weight: 300;
`

const BlogPost = (props) => {

    const {meta, children} = props;

    return (
        <Wrapper>
            <PostContainer>
                <HeadingContainer>
                    <BlogHeading>{meta.title}</BlogHeading>
                    <BlogDate>Published {meta.releaseDate}</BlogDate>
                </HeadingContainer>

                {children}

            </PostContainer>
        </Wrapper>
    );
}
 
export default BlogPost;