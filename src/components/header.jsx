import * as React from "react"
import { useState } from "react";
import { Link } from "rebass"
import styled from "styled-components"
import ThemeProvider from "./ThemeProvider";

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  background: ${props => (props.scrolled ? '#fff' : 'inherit')};;
  position: ${props => (props.scrolled ? 'fixed' : 'relative')};
  border-bottom: ${props => (props.scrolled ? '1px solid var(--separatorColor)' : 'none')};
  width: 100%;
`

const HeaderPreview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  color: var(--textNormal);
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

const MobileDropdownWrapper = styled.div`
  padding-top: 16px;
  display: ${props => (props.shouldDisplay ? "" : "none")};

  @media screen and (min-width: 750px){
    display: none;
  }
`

const MobileDropdown = styled.ul`

`

const MobileDropdownItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: #333;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #333;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
  }
`

const Header = ({ scrolled }) => {

  const [shouldDisplay, setShouldDisplay] = useState(false);

  return(
    <StyledHeader scrolled={scrolled}>

      <HeaderPreview>

        <StyledLink
          href="/"
        >
          Manu Gröbl
        </StyledLink>

        <DesktopSpan>

          <ThemeProvider />

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
            <svg viewBox="0 0 80 60" width="28" height="28" onClick={() => {
            console.log(shouldDisplay);
            setShouldDisplay(!shouldDisplay);
          }}>
                <rect width="80" height="8" rx="8" fill="#666"></rect>
                <rect y="24" width="80" height="8" rx="8" fill="#666"></rect>
                <rect y="48 " width="80" height="8" rx="8" fill="#666"></rect>
            </svg>
          </HamburgerButton>

        </MobileSpan>

      </HeaderPreview>

      <MobileDropdownWrapper shouldDisplay={shouldDisplay}>
        <MobileDropdown>

          <MobileDropdownItem>
            <StyledLink
              href="/blog"
            >
              Blog
            </StyledLink>
          </MobileDropdownItem>

          <MobileDropdownItem>
            <StyledLink
              href="/about"
            >
              About
            </StyledLink>
          </MobileDropdownItem>

          <MobileDropdownItem>
            <StyledLink
              href="/projects"
            >
              Projects
            </StyledLink>
          </MobileDropdownItem>
          
        </MobileDropdown>
      </MobileDropdownWrapper>
      
    </StyledHeader>
  );
}

export default Header
