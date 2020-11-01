import React,{useState} from 'react'
import  { HeroBg,HeroContainer,VideoBg,ArrowForward,ArrowRight,HeroContent
,HeroH1,HeroP,HeroWrapper } from './HeroElements';
import {Button} from '../ButtonElement'
import video from '../../videos/video.mp4'
const HeroSection = () => {
    const [hover,setHover]=useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp.4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking </HeroH1>
                <HeroP>Sign Up for a new place to receive $500 in credit</HeroP>
                <HeroWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover}
                     onMouseLeave={onHover}
                     primary="true"
                     dark="true">
                        Get Started {hover ? <ArrowForward/> :<ArrowRight/>}
                    </Button>
                </HeroWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
