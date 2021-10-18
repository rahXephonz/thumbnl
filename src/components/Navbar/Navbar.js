import React, { useState, useEffect } from 'react'
import Burger from './Burger'
import styled from 'styled-components'
import { Link } from "gatsby";

const Nav = styled.nav`
    background: ${({active}) => active ? "wheat" : "transparent"};
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

const NavLogo = styled(Link)`
    color: #4F1824;
    z-index: 2;
    justify-self: flex-start;
    cursor: pointer;
    padding-top: 5px;
    font-family: 'thumbnl-circular';
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 868px){
        font-size: 1.9rem;
    }
`

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScroll(true);
        }
        else{
            setScroll(false);
        }
    }

    useEffect(() => {
        changeNav();
        window.addEventListener("scroll", changeNav);
    }, [])

    return (
        <Nav active={scroll}>
            <NavbarContainer>
                <NavLogo to='/'>thumbnl</NavLogo>
                <Burger/>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
