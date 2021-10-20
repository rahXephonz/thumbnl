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
    justify-self: flex-start;
    cursor: pointer;
    z-index: 2;
    padding-top: 5px;
    font-family: 'thumbnl-circular';
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    background: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
    background-clip: text;
    -webkit-background-clip: text;

    @media screen and (max-width: 868px){
        font-size: 2.5rem;
    }
    @media screen and (max-width: 414px){
        font-size: 1.9rem;
    }

    @keyframes slidebg {
    to {
        background-position:20vw;
        }
    }

    &:hover{
        animation: slidebg 5s linear infinite;
        color: transparent;
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
