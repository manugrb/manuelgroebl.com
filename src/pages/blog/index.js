import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import BlogpostHomepagePreview from "../../components/blogpostHomepagePreview";
import { Box } from "rebass";
import { graphql, useStaticQuery } from "gatsby";

const HeadingContainer = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
`

const SiteHeading = styled.h1`
    width: fit-content;
    font-size: 32px;
    color: #000;
    text-decoration: none;
    line-height: 1;
    margin: 0;
    padding: 0 0 32px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const IntroductionContainer = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: flex-start;
`

const IntroductionParagraph = styled.p`
    color: #444;
    font-size: 18px;
    line-height: 1.5;
    max-width: 100%;
`

const BlogpostList = styled(Box)`
    padding: 16px 0 0 0;
    width: 100%;
`

const Blog = () => {

    

    const blogListData = useStaticQuery(graphql`
        {
            allMdx {
                nodes {
                    frontmatter {
                        title
                        slug
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <HeadingContainer>
                <SiteHeading>Blog</SiteHeading>
            </HeadingContainer>

            <IntroductionContainer>
                <IntroductionParagraph>Some of my thoughts on all kinds of topics like technologies I work with, travelling tips and experiences or some of my opinions on current issues.</IntroductionParagraph>
            </IntroductionContainer>

            <BlogpostList>
                {blogListData.allMdx.nodes.map(({ frontmatter }) => (
                    <BlogpostHomepagePreview title={frontmatter.title} date={frontmatter.date} views={512} href={"/blog" + frontmatter.slug}/>
                ))}
            </BlogpostList>

        </Layout>
    );
}
 
export default Blog;