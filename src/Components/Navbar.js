import React from 'react';
// import {GlobalStyle} from './StyledComponents/GlobalStyles';
import {Nav, NavContainer, NavLinks,NavMenu,NavItem, Logo} from './StyledComponents/Navbar.style';
import logo from './Logo.jpg';
export const Navbar = function () {
  return (
        <Nav>
            <NavContainer>
                <Logo to = "/">
                    <img  src={logo}></img>
                </Logo>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="/">
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">
                            about
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact">
                            contact
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
  )
}


