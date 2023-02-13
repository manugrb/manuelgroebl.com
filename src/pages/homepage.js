import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Layout from "../components/layout";
import Project from "../components/project";

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
`

const ProjectsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`


const HomePage = () => {

    return(
        <Layout>
            <div>
                <div>
                    <BaseHeader>Hi, I'm Manuel! 👋</BaseHeader>
                </div>

                <div>
                    <InfoParagraph>I'm a professional full stack developer from germany. I'm really exited about learning new things, especially new technologies that can help me improve my work.</InfoParagraph>
                    <InfoParagraph>Outside of programming, I'm really intersted in Math and Physics. I love to combine coding with my other interests.</InfoParagraph>
                    <InfoParagraph>If I'm not coding, I'm likely travelling the world or hiking / skiing around the alps</InfoParagraph>
                </div>
            </div>

            <div>
                <div>
                    <BaseHeader>Some Notable Projects</BaseHeader> 
                </div>

                <ProjectsDiv>
                    <Project title={"Solar Display"} description={"A web app, that displays interesting information about your solar system, storing all important values in a database to create helpful long-time statistics"}/>
                </ProjectsDiv>

            </div>

            <div>

                <div>
                    <BaseHeader>Recent Blog Posts</BaseHeader>
                </div>

            </div>
            
        </Layout>

    )

}

export default HomePage