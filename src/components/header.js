import * as React from "react"
import { Link } from "rebass"
import styled from "styled-components"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  color: #666;
  font-size: 24px;
  padding: 0 2rem;
  text-decoration: none;
`

const Header = ({ siteTitle }) => {
  return(
    <StyledHeader>

      <StyledLink
        href="/"
      >
        Manu Gröbl
      </StyledLink>

      <span>
        <StyledLink
          href="/blog"
        >
          Blog
        </StyledLink>

        <StyledLink
          href="/contact"
        >
          Contact
        </StyledLink>

        <StyledLink
          href="/projects"
        >
          Projects
        </StyledLink>
      </span>
      
    </StyledHeader>
  );
}

export default Header
