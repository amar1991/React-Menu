
import styled from 'styled-components';
import {Link as Links } from 'react-router-dom'


export const NavContainer = styled.div`
  margin: 0px auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
`;


export const Nav = styled.nav`
background-color: black;
box-shadow: none;
width: 100%;
align-items: center;
top:0;
z-index:100;
 
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
  font-weight: 500;
  display:flex;
  font-size: 1.3rem;
`;
export const Logo = styled.div`
padding-top: 10px;

`;