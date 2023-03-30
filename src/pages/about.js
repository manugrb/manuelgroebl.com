import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import Layout from "../components/layout";
import Frame from "../components/Frame";

const BaseHeader = styled.h1`
    color: #222;
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    font-family: Roboto;
    font-size: 42px;
`

const SubHeader = styled.h2`
    color: #333;
    text-align: start;
    padding-top: 1rem;
    font-weight: 600;
    margin: 0;
`

const SubSubHeader = styled.h3`
    color: #333;
    text-align: start;
    padding-top: 0.5rem;
    margin: 0;
`

const TextParagraph = styled.p`
    color: #333;
    text-align: justify;
    text-justify: inter-word;
`

const About = () => {

    return (

        <Frame
            title={"About - Manuel Gröbl - professional full stack developer"}
            description={"My About me page. Here I share some personal information, as well as my developer career."}
        >
            <Layout>
                <Box>
                    <BaseHeader>About Me</BaseHeader>
                    <TextParagraph>Hi, I'm Manuel! A full-stack developer germany, who loves to code, travel,  do math, think about physics and learn new things in general. </TextParagraph>
                </Box>
                <Box>
                    <SubHeader>Developer Career</SubHeader>
                    <TextParagraph>I really love being able to sustain my life with coding. That way I can make my hobby my job. I have also done other kinds of work in the past though. Here is a brief overview of the most important things I've done in my life:</TextParagraph>

                    <SubSubHeader>Rhotheta</SubSubHeader>
                    <TextParagraph>I've been working in this electronics company since October 2019 in a student job. It has given me great insight on how a company works, work ethics and all kind of different work fields</TextParagraph>

                    <SubSubHeader>Murnau2Go</SubSubHeader>
                    <TextParagraph>I developed a food ordering app for android together with a friend of mine. It can be used to order food (including toppings and other specials) in real time.</TextParagraph>

                    <SubSubHeader>Baer und Lilie</SubSubHeader>
                    <TextParagraph>I am working on creating a database application to store artworks and interesting information about them for a club dedicated to local art. Development started early 2022. I am on this project with abother developer.</TextParagraph>

                </Box>

                <Box>
                    <SubHeader>Personal Life</SubHeader>
                    <TextParagraph>Let me tell you a bit about myself!</TextParagraph>

                    <SubSubHeader>Education</SubSubHeader>
                    <TextParagraph>I finished German highschool (Gymnasium) in 2022. After that I took a year off to travel the world and work as a software freelancer. I will enroll in university in Fall of 2023.</TextParagraph>

                    <SubSubHeader>Interests</SubSubHeader>
                    <TextParagraph>I am interested in many things. Mainly technology, sience, math and travelling. <br/>
                    Obviously i really like programming, but I also like learning new things about computer hardware, as well as electrical engeneering. I believe in open source software and privacy. That's why I am always trying to move the open source community further (for example by spreading the word or developing open source software).<br/>
                    Concerning science, I am mostly interested in physics (especially theoretical physics).<br/>
                    I am also travelling the world right now. I've visited quite a few countries in Europe and Asia. So if you need any travel advice, just hit me up and maybe I can help you out.</TextParagraph>
                </Box>
            </Layout>
        </Frame>


    );

}
 
export default About;