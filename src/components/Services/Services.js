import React,{useEffect} from 'react'
import Icon1 from "../../images/website.png"
import Icon2 from "../../images/machine-learning.png"
import Icon3 from "../../images/microcontroller.png"
import AOS from 'aos'
import 'aos/dist/aos.css';

import { ServicesCard, ServicesCardHeading, ServicesContainer, ServicesDesc, ServicesHeading, ServicesIcon, ServicesWrapper } from '../../styles/ServicesElement'

const Services = () => {
    useEffect(() => {
        AOS.init({
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          delay: 50,
        });
    });

    return (
        <ServicesContainer>
            <ServicesHeading data-aos="fade-up" data-aos-delay="500">Our Program Features</ServicesHeading>
            <ServicesWrapper>
                <ServicesCard data-aos="flip-left" data-aos-delay="600">
                    <ServicesIcon src={Icon1} />
                    <ServicesCardHeading>Web Development</ServicesCardHeading>
                    <ServicesDesc>We offer teaching features in the field of web development, especially being a full stack developer between frontend and backend</ServicesDesc>
                </ServicesCard>
                <ServicesCard data-aos="flip-right" data-aos-delay="800">
                    <ServicesIcon src={Icon2} />
                    <ServicesCardHeading>Machine Learning</ServicesCardHeading>
                    <ServicesDesc>We offer teaching features in the field of Machine Learning, solve cases that occur in daily life cycle and solve them using with Tensorflow.</ServicesDesc>
                </ServicesCard>
                <ServicesCard data-aos="flip-up" data-aos-delay="1000">
                    <ServicesIcon src={Icon3} />
                    <ServicesCardHeading>MicroController</ServicesCardHeading>
                    <ServicesDesc>We offer teaching features in the field of automation, especially how to make some technology with Arduino, and Raspberry Pi</ServicesDesc>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
