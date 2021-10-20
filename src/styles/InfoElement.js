import styled from "styled-components";

export const WrapperSec = styled.div`
    padding: 100px 0;
`

export const WrapperRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse': 'row') };
`

export const WrapperColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 868px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-left: -24px;
    
    @media screen and (max-width: 884px){
        padding-bottom: 65px;
        margin-left: -5px;
    }

`

export const Heading = styled.h1`
    font-size: 68px;
    line-height: 1.1;
    margin-left: -5px;
    color: #4F1824;
    margin-bottom: 20px;
    font-family: 'thumbnl-circular';

    @media screen and (max-width: 428px){
        font-size: 45px;
        margin-left: 0px;

    }

    @media screen and (max-width: 393px){
        br{
            display: none;
        }
    }

    @media screen and (max-width: 320px){
        font-size: 38px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 25px;
    font-family: 'Sora';
    margin-left: -5px;

    @media screen and (max-width: 428px){
        font-size: 16px;
        text-align: justify;
        margin-left: 0px;
    }
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    margin-top: -50px;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img`
    margin-right: -45px;
    border: 0;
    max-width: 120%;
    max-height: 530px;

    @media screen and (max-width: 868px){
        margin: 0px;
        max-width: 110%;
    }
`
