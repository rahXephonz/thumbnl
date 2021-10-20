import { Link } from "gatsby";
import styled from "styled-components";

export const Footer = styled.footer`
    padding: 4.5rem 0 2.5rem;
    background-color: #27272E;
    border-radius: 30px 30px 0px 0px;
    color: #fff;
    margin-top: 30px;

    @media screen and (max-width: 600px){
        margin-top: 30px;
    }
`

export const FooterSec = styled.div`
    margin-left: -24px;
    display: grid;
    row-gap: 5rem;

    @media screen and (max-width: 884px){
        margin-left: -5px;
    }
`

export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;

    section{
       &:nth-child(2){
           margin-left: 120px;
       }
       &:nth-child(3){
           margin-left: 105px;
       }
       &:nth-child(4){
           margin-left: 100px;
       }
    }

    @media screen and (max-width: 884px){
        section{
            &:nth-child(2){
                margin-left: 60px;
            }
            &:nth-child(3){
                margin-left: 0px;
            }
            &:nth-child(4){
                margin-left: 0px;
            }
        }
    }

    @media screen and (max-width: 600px){
        section{
            &:nth-child(2){
                margin-left: 60px;
            }
            &:nth-child(3){
                margin-left: 0px;
            }
            &:nth-child(4){
                margin-left: 60px;
            }
        }
    }

    @media screen and (max-width: 428px){
        section{
            &:nth-child(2){
                margin-left: 0px;
            }
            &:nth-child(3){
                margin-left: 0px;
            }
            &:nth-child(4){
                margin-left: 0px;
            }
        }
    }
`

export const FooterTitle = styled.h1`
    font-size: 40px;
    letter-spacing: 1px;
    font-family: 'thumbnl-circular';
    margin-bottom: 10px;
    background: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
    background-clip: text;
    -webkit-background-clip: text;

    @keyframes slidebg {
    to {
        background-position: 20vw;
        }
    }

    &:hover{
        animation: slidebg 3s linear infinite;
        color: transparent;
    }
`

export const FooterDescription = styled.p`
    max-width: 250px;
    font-family: 'Sora';

    
    @media screen and (max-width: 280px){
        font-size: 13.5px;
    }
`

export const Social = styled.div`
    font-size: 1.25rem;
    margin-top: 15px;
`

export const Opener = styled.a`
    cursor: pointer;
    margin-right: 15px;
    text-decoration: none;
`

export const FooterSubtitle = styled.h3`
    font-family: 'Sora';
`

export const FooterMenu = styled.ul`
    list-style: none;
    font-family: 'Sora';
    margin-top: 25px;

    @media screen and (max-width: 280px){
        font-size: 13.5px;
    }
`

export const FooterItem = styled.li`
    margin-top: 10px;
`

export const FooterLinks = styled(Link)`
    text-decoration: none;
    color: #fff;
`

export const FooterRights = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 280px){
        font-size: 13.5px;
    }
`

export const FooterRightsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const FooterCopy = styled.p`
    justify-self: flex-start;
    font-family: 'Sora';
    display: flex;
    align-items: center;
`

export const FooterRightsMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`

export const FooterRightsItem = styled.li`
    margin-right: 20px;
`

export const FooterRightsLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    font-family: 'Sora';
    color: #fff;
`