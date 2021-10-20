import React from 'react'
import Hero from "../../images/hero_4.png"
import Ellipses from "../../images/Ellipse2.svg"
import { Ellipse, Heading, WrapperSec, WrapperRow, WrapperColumn, ImgWrapper, Img, TopLine, TextWrapper, Subtitle } from '../../styles/LookupElement'
import { Button, Container } from '../../styles/globalStyles'
import { Link } from 'gatsby'

const LookupSection = ({ imgStart, heading, description, start, primary, topLine }) => {


    return (
    <>
        <WrapperSec>
            <Container>
                <WrapperRow imgStart={imgStart}>
                    <WrapperColumn>
                        <TextWrapper>
                            <Ellipse src={Ellipses} alt="thumbnl_static_ellipse"/>
                            <TopLine>{topLine}</TopLine>
                            <Heading>{heading}</Heading>
                            <Subtitle>{description}</Subtitle>
                            <Link to='/lookup'>
                                <Button big fontBig primary={primary}>
                                    Start Now <span style={{fontSize: "20px", marginLeft: "5px"}}>⇀</span>
                                </Button>
                            </Link>
                        </TextWrapper>
                    </WrapperColumn>
                    <WrapperColumn>
                        <ImgWrapper start={start}>
                            <Img src={Hero} alt="thumbnl_static_hero"/>
                        </ImgWrapper>
                    </WrapperColumn>
                </WrapperRow>
            </Container>
        </WrapperSec>
    </>
    )
}

export default LookupSection
