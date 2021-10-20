import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
    align-items: center;
    background-color: #FDA6B4;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }

    @media screen and (max-width: 280px){
        height: 1450px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    width: 63px;
    height: 60px;
    margin-bottom: 10px;
`

export const ServicesHeading = styled.h1`
    font-size: 4.2rem;
    color: #fff;
    letter-spacing: 2px;
    font-family: 'thumbnl-circular';
    margin-bottom: 64px;
    

    @media screen and (max-width: 884px){
        text-align: center;
    }
    @media screen and (max-width: 480px){
        font-size: 2.5rem;
    }
`

export const ServicesCardHeading = styled.h2`
    font-family: 'Sora';
    font-size: 1.2rem;
    margin-bottom: 10px;

    @media screen and (max-width: 320px){
        font-size: 1rem;
    }
    @media screen and (max-width: 280px){
        font-size: 0.9rem;
    }
`

export const ServicesDesc = styled.p`
    font-size: 1rem;
    font-family: 'Sora';
    text-align: center;
`