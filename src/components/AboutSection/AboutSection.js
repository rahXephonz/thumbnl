import React from 'react'
import Hero from "../../images/hero_2.png"
import Ellipses from "../../images/Ellipse1.svg"
import { Button, Container } from '../../styles/globalStyles'
import { Ellipse, Heading, Img, ImgWrapper, WrapperColumn, WrapperRow, WrapperSec, Subtitle, TextWrapper, TopLine, } from '../../styles/AboutElement'
import { Link } from 'gatsby'


const AboutSection = ({ imgStart, heading, heading2, description, start, primary, topLine }) => {


    return (
    <>
        <WrapperSec>
            <Container>
                <WrapperRow imgStart={imgStart}>
                <WrapperColumn>
                    <ImgWrapper start={start}>
                        <Img src={Hero} alt="thumbnl_static_hero"/>
                    </ImgWrapper>
                    </WrapperColumn>
                    <WrapperColumn>
                        <TextWrapper>
                            <Ellipse src={Ellipses} alt="thumbnl_static_ellipse"/>
                            <TopLine>{topLine}</TopLine>
                            <Heading>{heading} <br />{heading2}</Heading>
                            <Subtitle>{description}</Subtitle>
                            <Link to='/lookup'>
                                <Button big fontBig primary={primary} left>
                                Learn More <span style={{fontSize: "20px", marginLeft: "5px"}}>⇀</span>
                                </Button>
                            </Link>
                        </TextWrapper>
                    </WrapperColumn>
                </WrapperRow>
            </Container>
        </WrapperSec>
    </>
    )
}

export default AboutSection
