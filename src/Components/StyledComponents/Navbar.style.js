
import styled from 'styled-components';
import {Link as Links } from 'react-router-dom'


export const NavContainer = styled.div`
  margin: 0px auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
`;


export const Nav = styled.nav`
background-color: transparent;
box-shadow: none;
position: absolute;
width: 100%;
  
`;



export const NavLinks = styled(Links)`
  color: white;
  text-decoration: none;
`;

export const NavItem = styled.li`
  list-style-type: none;
  padding: 20px;
`;
export const NavMenu = styled.ul`
  font-weight: 700;
  display:flex;
  font-size: 1.5rem;
`;
export const Logo = styled.div`
padding-top: 10px;
`;