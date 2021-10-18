import React, { useState }from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'

const StyledBurger = styled.div`
    width: 2rem;
    opacity: 0;
    height: 2rem;
    position: fixed;
    top: 28px;
    right: 30px;
    padding-top: 3px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 2;

    div {
       width: 2rem;
       height: 0.25rem;
       border-radius: 10px;
       background-color: ${({ Open }) => Open ? '#fff' : '#4F1824'};
       transform-origin: 1px;
       transition: all 0.3s linear;
       
       &:nth-child(1){
           transform: ${({ Open }) => Open ? 'rotate(45deg)' : 'rotate(0)'};
       }

       &:nth-child(2){
           width: ${({ Open }) => Open ? '2rem' : '1.5rem'};
           margin-left: ${({ Open }) => Open ? '0px' : '7px'};
           transform: ${({ Open }) => Open ? 'translateX(100%)' : 'translateX(0)'};
           opacity: ${({ Open }) => Open ? 0 : 1};
       }

       &:nth-child(3){
        width: ${({ Open }) => Open ? '2rem' : '1.2rem'};
        margin-left: ${({ Open }) => Open ? '0px' : '12px'};
        transform: ${({ Open }) => Open ? 'rotate(-45deg)' : 'rotate(0)'};
        margin-top: ${({ Open }) => Open ? '4px' : '0px'};
       }
    }

    @media screen and (max-width: 868px){
        opacity: 1;
    }

`


const Burger = () => {

    const [Open, setOpen] = useState(false)

    return (
    <>
        <StyledBurger Open={Open} onClick={() => setOpen(!Open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <RightNav Open={Open}/>
    </>
    )
}

export default Burger
