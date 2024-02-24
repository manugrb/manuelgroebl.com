import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import Layout from "../components/layout";
import Frame from "../components/Frame";
import Seo from "../components/seo";
import { Link } from "gatsby";

const HeaderContainer = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
`

const PageHeader = styled.h1`
    font-size: 32px;
    color: #222;
    padding-top: 1rem;
    margin: 0;
    padding-bottom: 2rem;
`

const MainTextHeader = styled.h1`
    margin: 0;
    font-size: 24px;
    color: #333;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
`

const MainTextContainer = styled(Box)`
    text-align: justify;
    text-justify: inter-word;
`

const MainTextParagraph = styled.p`
    font-size: 16px;
    color: #444;
    margin: 0;
    padding-bottom: 1em;
`

const MainTextList = styled.ul`
    margin-top: 0;
    padding-bottom: 2em;
`

const MainTextListItem = styled.li`
    margin: 0;
`

const Privacy = () => {

    return (
        <Layout>
            <HeaderContainer>
                <PageHeader>Privacy Policy</PageHeader>
            </HeaderContainer>

            <MainTextContainer>
                
                <MainTextParagraph>This privacy notice describes how this website uses might collect, store or use your personal data.</MainTextParagraph>

                <MainTextHeader>What Information does this website collect?</MainTextHeader>

                <MainTextParagraph>When accessing this website, the website provider will log your visit in server-log files. Those log files will contain following data:</MainTextParagraph>
                <MainTextList>
                    <MainTextListItem>Domain of the visited website</MainTextListItem>
                    <MainTextListItem>Time of your visit</MainTextListItem>
                    <MainTextListItem>Amount of sent data</MainTextListItem>
                    <MainTextListItem>Link from where you klicked on this website</MainTextListItem>
                    <MainTextListItem>The Browser you used to access this website</MainTextListItem>
                    <MainTextListItem>The operating system, you used to access this website</MainTextListItem>
                    <MainTextListItem>Your IP-address</MainTextListItem>
                </MainTextList>

                <MainTextParagraph>I am also using Umami to track the traffic on this website. Umami is an open source analytics tool. You can view the source <Link to="github.com/umami-software/umami">here</Link>. The tracked data is stored on their servers, which are located in europe. Umami tracks the following data:</MainTextParagraph>
                <MainTextList>
                    <MainTextListItem>Domain of the visited website</MainTextListItem>
                    <MainTextListItem>Time of your visit</MainTextListItem>
                    <MainTextListItem>Amount of sent data</MainTextListItem>
                    <MainTextListItem>Link from where you klicked on this website</MainTextListItem>
                    <MainTextListItem>The Browser you used to access this website</MainTextListItem>
                    <MainTextListItem>The operating system, you used to access this website</MainTextListItem>
                    <MainTextListItem>Your IP-address</MainTextListItem>
                    <MainTextListItem>Your Country and Region</MainTextListItem>
                    <MainTextListItem>The device you are using to access this site</MainTextListItem>
                </MainTextList>

                <MainTextParagraph>These log files will be deleted after 7 days. They help the website provider to identify and react to attacks on their infrastructure.</MainTextParagraph>
                <MainTextParagraph>This website will not collect, store or use any other of your personal data.</MainTextParagraph>
                <MainTextParagraph>This website does not use any third-party services with servers in the US. Therefore your data will not cross US borders, as long as you do not access it from within the US.</MainTextParagraph>
                <MainTextParagraph>This website does not use any social media plugins.</MainTextParagraph>


            </MainTextContainer>
        </Layout>
    );
}
 
export default Privacy;

export const Head = () => (
    <Seo 
        title={"Privacy - Manuel Gröbl - professional full stack developer"}
        description={"My Privacy Statement - Privacy is very important to me"}
    />
);