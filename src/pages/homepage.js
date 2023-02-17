import React from "react";
import styled from "styled-components";
import BlogpostHomepagePreview from "../components/blogpostHomepagePreview";
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


const HomePage = () => {

    return(
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
                    <Project title={"Raspberry Pi home server"} description={"A web app for my Raspberry Pi at home to make my life easier"} href={"/whatever"}/>
                    <Project title={"DIY Bluetooth lights"} description={"A 100% DIY bluetooth controlled dimmable smart LED light for my room"} href={"/bluetoothLights"}/>
                </ProjectsDiv>

            </div>

            <div>

                <div>
                    <BaseHeader>Recent Blog Posts</BaseHeader>
                </div>

                <div>
                    <BlogpostHomepagePreview title={"My cool blogpost"} date={"Febuary 15, 2023"} views={512} href={'/test'}/>
                </div>

            </div>
            
        </Layout>

    )

}

export default HomePage