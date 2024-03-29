/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Box, Link } from "rebass"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const LayoutWrapper = styled(Box)`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const StyledFooter = styled.footer`
  background: var(--footerColor);
  margin-top: var(--space-5);
  font-size: var(--font-sm);
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const FooterTextBox = styled(Box)`
  display: grid;
  font-size: 16px;
  color: var(--textNormal);
`

const FooterMiddleSpacer = styled(Box)`
  width: 10%;
`

const FooterLinkBox = styled(Box)`
  display: grid;
  font-size: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  color: var(--textNormal);

  &:hover{
    text-decoration: underline;
  }
`

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <Header scrolled={false} /> {/* TODO: implement some scroll detection here... */}
      <div
        style={{
          margin: `0 auto`,
          width: `var(--size-content)`,
          maxWidth: `100vw`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
      </div>
      <StyledFooter>
        <FooterTextBox>
          © {new Date().getFullYear()} &middot; Manuel Gröbl
        </FooterTextBox>
        <FooterMiddleSpacer/>
        <FooterLinkBox>
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="https://github.com/manugrb/manuelgroebl.com">View source on GitHub</FooterLink>
          <FooterLink href="mailto:contact@manuelgroebl.com">Contact</FooterLink>
        </FooterLinkBox>
      </StyledFooter>
    </LayoutWrapper>
  )
}

export default Layout
