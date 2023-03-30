import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import BlogpostHomepagePreview from "../components/blogpostHomepagePreview";
import Layout from "../components/layout";
import Project from "../components/project";
import BlogPostList from "../components/BlogPostList";
import Frame from "../components/Frame";

import { graphql, useStaticQuery } from "gatsby";

const BaseHeader = styled.h1`
    color: #222;
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    font-family: Roboto;
    font-size: 32px;
`

const InfoParagraph = styled.p`
    color: #444;
    font-size: 18px;
    line-height: 1.5;
    max-width: none;
`

const ProjectsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    margin-left: calc(50% - 100vw / 2);
    align-items: center;
    justify-content: center;

`

const HomePageContentContainer = styled(Box)`
    background: #f7f8f9;
`


const HomePage = () => {

    const blogListData = useStaticQuery(graphql`
        {
            allMdx(sort: {frontmatter: {date: DESC}}, limit: 3) {
                nodes {
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        slug
                    }
                }
            }
        }
    `);

    return(

        <Frame
            title={"Manuel Gröbl - professional full stack developer"}
            description={"Professional full stack web developer with over 3.5 years of experience. Specializes in Javascript and Backend."}
        >
            <Layout>
                <div>
                    <div>
                        <BaseHeader>Hi, I'm Manuel! 👋</BaseHeader>
                    </div>

                    <div>
                        <InfoParagraph>I'm a professional full stack developer from germany. I started coding over 3.5 years ago and have been working on multiple comercial projects in the last 2 years.</InfoParagraph>
                        <InfoParagraph>I really enjoy learning new things, especially new technologies that can help me improve my work. Outside of programming, I'm really intersted in Math and Physics. I love to combine coding with my other interests.</InfoParagraph>
                        <InfoParagraph>If I'm not coding, I'm likely travelling the world, skiing or hiking around the alps.</InfoParagraph>
                    </div>
                </div>

                <div>
                    <div>
                        <BaseHeader>Some Notable Projects</BaseHeader> 
                    </div>

                    <ProjectsDiv>
                        <Project title={"Solar Display"} description={"A web app, that displays everything you need to know about your solar system"} href={"https://github.com/manugrb/alternative-solarmax-display"}/>
                        <Project title={"Raspberry Pi home server"} description={"A web app for my Raspberry Pi at home to make my life easier"} href={"/raspberyypihomeserver"}/>
                        <Project title={"DIY Bluetooth lights"} description={"A 100% DIY bluetooth controlled dimmable smart LED light for my room"} href={"/bluetoothLights"}/>
                    </ProjectsDiv>

                </div>

                <div>

                    <div>
                        <BaseHeader>Recent Blog Posts</BaseHeader>
                    </div>

                    <div>
                        <BlogPostList>
                            {blogListData.allMdx.nodes.map(({ frontmatter }) => (
                                <BlogpostHomepagePreview title={frontmatter.title} date={frontmatter.date} href={"/blog" + frontmatter.slug}/>
                            ))}
                        </BlogPostList>
                    </div>

                </div>

            </Layout>
        </Frame>


    )

}

export default HomePage