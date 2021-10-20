import React from 'react'
import { Button, Container } from '../../styles/globalStyles'
import { Heading, Img, ImgWrapper, WrapperColumn, WrapperRow, WrapperSec, Subtitle, TextWrapper } from '../../styles/InfoElement'
import { Link } from 'gatsby'
import Hero from "../../images/hero.png"


const InfoSection = ({ imgStart, heading, heading2, description, start, primary }) => {
    return (
    <>
        <WrapperSec>
            <Container>
                <WrapperRow imgStart={imgStart}>
                    <WrapperColumn>
                        <TextWrapper>
                            <Heading>{heading} <br />{heading2}</Heading>
                            <Subtitle>{description}</Subtitle>
                            <Link to='/lookup'>
                                <Button big fontBig primary={primary} style={{marginLeft: '-5px'}}>
                                    Get Started ✊
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

export default InfoSection
