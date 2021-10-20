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
    margin-left: 100px;
    
    @media screen and (max-width: 884px){
        padding-bottom: 65px;
        margin-left: -5px;
    }
`

export const TopLine = styled.h1`
    font-family: 'Sora';
    font-weight: bold;
    color: #49B842;
    font-size: 25px;
    margin-left: 25px;
    margin-bottom: 5px;
`

export const Heading = styled.h1`
    font-size: 68px;
    line-height: 1.1;
    margin-bottom: 90px;
    color: #4F1824;
    margin-left: 20px;
    font-family: 'thumbnl-circular';

    @media screen and (max-width: 428px){
        font-size: 55px;

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
    margin-left: -70px;
    line-height: 25px;
    font-family: 'Sora';

    
    @media screen and (max-width: 868px){
        margin-left: 0px;
    }
    
    @media screen and (max-width: 428px){
        font-size: 16px;
    }

`

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
    margin-left: 30px;
    margin-top: -90px;

    @media screen and (max-width: 868px){
        margin: 0px;
    }
`

export const Img = styled.img`
    border: 0;
    max-width: 150%;
    max-height: 530px;

    @media screen and (max-width: 868px){
        margin: 0px;
        max-width: 120%;
    }
`

export const Ellipse = styled.img`
    max-width: 236px;
    max-height: 237px;
    position: absolute;
    z-index: -1;
    margin-top: -70px;
    margin-left: -90px;
`
