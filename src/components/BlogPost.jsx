import * as React from "react"
import { Box } from "rebass"
import styled from "styled-components"

const HeadingContainer = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
`

const BlogHeading = styled.h2`
    font-size: 32px;
    line-height: 1;
    margin: 0px;
    padding-bottom: 16px;
    padding-top: 32px;
`

const BlogPost = (props) => {

    const {meta, children} = props;

    return (
        <div>
            <HeadingContainer>
                <BlogHeading>{meta.title}</BlogHeading>
            </HeadingContainer>

            {children}

        </div>
    );
}
 
export default BlogPost;