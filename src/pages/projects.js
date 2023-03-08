import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import Layout from "../components/layout";

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

        <Layout>

            <Box>
                <BaseHeader>Projects</BaseHeader>
                <TextParagraph>Since I started coding, i have worked on many different projects. Some were payed for, some where just for fun. Here is a brief overview of some of those projects:</TextParagraph>
            </Box>

            <Box>
                <SubHeader>Comercial Projects</SubHeader>
            </Box>

            <Box>
                <SubHeader>Hobby Projects</SubHeader>
            </Box>

        </Layout>

    );

}
 
export default About;