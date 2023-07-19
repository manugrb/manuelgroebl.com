import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import Project from "../components/project";
import Layout from "../components/layout";
import Frame from "../components/Frame";
import Seo from "../components/seo";

const BaseHeader = styled.h1`
    color: var(--textHighlight);
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    font-family: Roboto;
    font-size: 42px;
`

const SubHeader = styled.h2`
    color: var(--textHighlight);
    text-align: start;
    padding-top: 1rem;
    font-weight: 600;
    margin: 0;
`

const SubSubHeader = styled.h3`
    color: var(--textHighlight);
    text-align: start;
    padding-top: 0.5rem;
    margin: 0;
`

const TextParagraph = styled.p`
    color: var(--textNormal);
    text-align: justify;
    text-justify: inter-word;
`

const ProjectsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    margin-left: calc(50% - 100vw / 2);
    align-items: center;
    justify-content: center;

`

const About = () => {

    return (

        <Layout>

            <Box>
                <BaseHeader>Projects</BaseHeader>
                <TextParagraph>Since I started coding, i have worked on many different projects. Some were payed for, some where just for fun. Here is a brief overview of some of those projects:</TextParagraph>
            </Box>

            <Box>
                <SubHeader>Comercial Projects</SubHeader>
                <ProjectsDiv>
                    <Project title={"Murnau2Go"} description={"An App for Android, that lets you order food online (click and collect)"} href={"/murnau2go"}/>
                    <Project title={"Baer und Lilie DB"} description={"A web app for storing data and pictures of historic artworks."} href={"/artworkdb"}/>
                </ProjectsDiv>
            </Box>

            <Box>
                <SubHeader>Hobby Projects</SubHeader>
                <ProjectsDiv>
                    <Project title={"Solar Display"} description={"A web app, that displays everything you need to know about your solar system"} href={"https://github.com/manugrb/alternative-solarmax-display"}/>
                    <Project title={"Raspberry Pi home server"} description={"A web app for my Raspberry Pi at home to make my life easier"} href={"/raspberyypihomeserver"}/>
                    <Project title={"DIY Bluetooth lights"} description={"A 100% DIY bluetooth controlled dimmable smart LED light for my room"} href={"/bluetoothLights"}/>
                </ProjectsDiv>
            </Box>

        </Layout>

    );

}
 
export default About;

export const Head = () => (
    <Seo
        title={"Projects - Manuel Gröbl - professional full stack developer"}
        description={"A List of selected projects, I worked on with some descriptions for a better understanding"}
    />
);