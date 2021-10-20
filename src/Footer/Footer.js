import React from 'react'
import { Footer, FooterContent, FooterDescription, FooterSec, FooterTitle, Social, Opener, FooterSubtitle, FooterMenu, FooterItem, FooterLinks, FooterRights, FooterRightsContainer, FooterCopy, FooterRightsMenu, FooterRightsItem, FooterRightsLink } from '../styles/FooterElement'
import { Container } from '../styles/globalStyles'
import { FaGithub, FaStackOverflow, FaInstagram, FaTwitter } from "react-icons/fa"

const Footers = () => {
    return (
    <>
        <Footer>
            <Container>
                <FooterSec>
                    <FooterContent>
                        <section>
                            <FooterTitle>thumbnl</FooterTitle>
                            <FooterDescription>We offering you the exercise, gain a valuable and some experience in here.</FooterDescription>
                            <Social>
                                <Opener href={'//www.facebook.com'} target='_blank' aria-label="facebook" rel="noopener noreferrer">
                                    <FaGithub style={{color: '#FFF'}}/>
                                </Opener>
                                <Opener href={'//www.facebook.com'} target='_blank' aria-label="facebook" rel="noopener noreferrer">
                                    <FaStackOverflow style={{color: '#FFA500'}}/>
                                </Opener>
                                <Opener href={'//www.facebook.com'} target='_blank' aria-label="facebook" rel="noopener noreferrer">
                                    <FaInstagram style={{color: '#F037A5'}}/>
                                </Opener>
                                <Opener href={'//www.facebook.com'} target='_blank' aria-label="facebook" rel="noopener noreferrer">
                                    <FaTwitter style={{color: '#3DB2FF'}}/>
                                </Opener>
                            </Social>
                        </section>

                        <section>
                            <FooterSubtitle>About</FooterSubtitle>
                            <FooterMenu>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Who We Are</FooterLinks> 
                                </FooterItem>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Our Story</FooterLinks> 
                                </FooterItem>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Our Blog</FooterLinks> 
                                </FooterItem>
                            </FooterMenu>
                        </section>

                        <section>
                            <FooterSubtitle>Company</FooterSubtitle>
                            <FooterMenu>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Became a member</FooterLinks> 
                                </FooterItem>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Our Developer</FooterLinks> 
                                </FooterItem>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Testimonials</FooterLinks> 
                                </FooterItem>
                            </FooterMenu>
                        </section>

                        <section>
                            <FooterSubtitle>Support</FooterSubtitle>
                            <FooterMenu>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Our Services</FooterLinks> 
                                </FooterItem>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Our Careers</FooterLinks> 
                                </FooterItem>
                                <FooterItem>
                                    <FooterLinks to='/#about'>Contact Us</FooterLinks> 
                                </FooterItem>
                            </FooterMenu>
                        </section>
                    </FooterContent>
                </FooterSec>
            </Container>
            <FooterRights>
                <FooterRightsContainer>
                    <FooterCopy>&#169; 2021 thumbnl.</FooterCopy>
                    <FooterRightsMenu>
                        <FooterRightsItem>
                            <FooterRightsLink to='/'>Our Terms</FooterRightsLink>
                        </FooterRightsItem>
                        <FooterRightsItem>
                            <FooterRightsLink to='/'>Privacy Policy</FooterRightsLink>
                        </FooterRightsItem>
                    </FooterRightsMenu>
                </FooterRightsContainer>
            </FooterRights>
        </Footer>
    </>
    )
}

export default Footers
