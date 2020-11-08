import React,{useState} from 'react'
import  { HeroBg,HeroContainer,ImgBg,ArrowForward,ArrowRight,HeroContent
,HeroH1,HeroP,HeroWrapper} from './HeroElements';
import {Button} from '../ButtonElement'
const HeroSection = () => {
    const [hover,setHover]=useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImgBg src="../../images/bg.jpg"  alt="background Image"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>System Development</HeroH1>
                <HeroP>Sign Up for a new place to build your Software</HeroP>
                <HeroWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover}
                     onMouseLeave={onHover}
                     primary="true"
                     dark="true"
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact="true"
                     offset={-80}
                     >
                        Get Started {hover ? <ArrowForward/> :<ArrowRight/>}
                    </Button>
                </HeroWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
