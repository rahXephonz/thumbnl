import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 868px){
        flex-flow: column nowrap;
        align-items: flex-start;
        background-color: #FDA6B4;
        position: fixed;
        transform: ${({ Open }) => Open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 5rem;
        z-index: 1;
        transition: transform 0.3s ease-in-out;
    }
`

const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 868px){
        padding: 10px 10px;
        font-size: 1.1rem;
    }
`

const NavLinks = styled(Link)`
    color: #4F1824;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-weight: bold;
    cursor: pointer;
    font-family: 'Sora';

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

const RightNav = ({ Open }) => {
    return (
    <>
        <NavMenu Open={Open} >
            <NavItem>
                <NavLinks to='/'>Our Blog</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='/'>Our Features</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='/'>Our Pricing✨</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='/lookup'>Log—in</NavLinks>
            </NavItem>
        </NavMenu>
    </>
    )
}

export default RightNav
