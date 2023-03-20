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

const DesktopSpan = styled.span`
  @media screen and (max-width: 750px){
    display: none;
  }
`

const MobileSpan = styled.span`
  @media screen and (min-width: 750px){
    display: none;
  }
`

const HamburgerButton = styled.button`
  border: none;
  background: inherit;

  &:hover{
    cursor: pointer;
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

      <DesktopSpan>
        <StyledLink
          href="/blog"
        >
          Blog
        </StyledLink>

        <StyledLink
          href="/about"
        >
          About
        </StyledLink>

        <StyledLink
          href="/projects"
        >
          Projects
        </StyledLink>
      </DesktopSpan>

      <MobileSpan>

        <HamburgerButton>
          <svg viewBox="0 0 80 60" width="28" height="28">
              <rect width="80" height="8" rx="8" fill="#666"></rect>
              <rect y="24" width="80" height="8" rx="8" fill="#666"></rect>
              <rect y="48 " width="80" height="8" rx="8" fill="#666"></rect>
          </svg>
        </HamburgerButton>

      </MobileSpan>
      
    </StyledHeader>
  );
}

export default Header
