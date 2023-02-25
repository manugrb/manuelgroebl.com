import * as React from "react"
import { Box } from "rebass"
import styled from "styled-components"

const StyledBlogPostList = styled(Box)`
    padding: 16px 0 0 0;
    width: 100%;
`

const BlogPostList = (props) => {
    return (
        <StyledBlogPostList>
            {props.children}
        </StyledBlogPostList>
    );
}
 
export default BlogPostList;