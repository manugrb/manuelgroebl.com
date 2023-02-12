import * as React from "react"
import { Link } from "rebass"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: #666;
  font-size: 24px;
  padding: 0 2rem;
  text-decoration: none;
`

const Header = ({ siteTitle }) => {
  return(
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >

      <StyledLink
        href="/"
      >
        Manu Gröbl
      </StyledLink>

      <span>
        <StyledLink>
          Blog
        </StyledLink>

        <StyledLink>
          Contact
        </StyledLink>

        <StyledLink>
          Projects
        </StyledLink>
      </span>
      
    </header>
  );
}

export default Header
