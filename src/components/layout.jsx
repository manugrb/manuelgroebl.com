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
import { Box } from "rebass"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #f6f7f8;
  }
`

const LayoutWrapper = styled(Box)`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const StyledFooter = styled.footer`
  background: #fff;
  margin-top: var(--space-5);
  font-size: var(--font-sm);
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const Layout = ({ children }) => {

  return (
    <>

      <GlobalStyle />

      <LayoutWrapper>
        <Header scrolled={false} /> {/* TODO: implement some scroll detection here... */}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
        </div>
        <StyledFooter>
          © {new Date().getFullYear()} &middot; Manuel Gröbl
        </StyledFooter>
      </LayoutWrapper>
    </>
  )
}

export default Layout
