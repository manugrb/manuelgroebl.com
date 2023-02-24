import * as React from "react"
import { Link } from "rebass"
import styled from "styled-components"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => (props.scrolled ? '#fff' : 'inherit')};;
  position: ${props => (props.scrolled ? 'fixed' : 'relative')};
  border-bottom: ${props => (props.scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none')};
  width: 100%;
`

const StyledLink = styled(Link)`
  color: #666;
  font-size: 24px;
  padding: 0 2rem;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
`

const Header = ({ scrolled }) => {
  return(
    <StyledHeader scrolled={scrolled}>

      <StyledLink
        href="/homepage"
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
