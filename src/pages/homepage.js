import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Layout from "../components/layout";

const BaseHeader = styled.h1`
    color: #222;
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    font-family: Roboto;
    font-size: 32px;
`   

const HomePage = () => {

    return(
        <Layout>
            <div>
                <div>
                    <BaseHeader>Hi, I'm Manuel! 👋</BaseHeader>
                </div>

                <div>
                    <p>I'm a professional full stack developer from germany. I'm really exited about learning new things, especially new technologies that can help me improve my work.</p>
                    <p>Outside of programming, I'm really intersted in Math and Physics. I love to combine coding with my other interests.</p>
                    <p>If I'm not coding, I'm likely travelling the world or hiking / skiing around the alps</p>
                </div>
            </div>

            <div>
                <div>
                    <BaseHeader>Some Notable Projects</BaseHeader> 
                </div>

                <div>
                    <h3>[INSERT PROJECTS HERE]</h3>
                </div>

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