import React from 'react'
import {
    FooterContainer,FooterLink,
    FooterLinkItems,FooterLinkTitle,
    FooterWrap,FooterLinksContainer,
    FooterLinksWrapper,SocialIcons,
    SocialIconLink,SocialLogo,
    SocialMedia,SocialMediaWrap,
    WebsiteRights
} from './FooterElements'

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to ='/signin'>How it works</FooterLink>
                                <FooterLink to ='/signin'>Careers</FooterLink>
                                <FooterLink to ='/signin'>Investors</FooterLink>
                                <FooterLink to ='/sigin'>Terms of services</FooterLink>
                            </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle>Technologies</FooterLinkTitle>
                                <FooterLink to ='/signin'>Cloud</FooterLink>
                                <FooterLink to ='/signin'>Web Design</FooterLink>
                                <FooterLink to ='/signin'>Software Implementation</FooterLink>
                                <FooterLink to ='/signin'>Servers Maintenance</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle>Prices</FooterLinkTitle>
                                <FooterLink to ='/signin'>Marketing</FooterLink>
                                <FooterLink to ='/signin'>Projects</FooterLink>
                                <FooterLink to ='/signin'>Courses</FooterLink>
                                <FooterLink to ='/signin'>Finacial Development</FooterLink>
                            </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle>Glassview Offices</FooterLinkTitle>
                                <FooterLink to ='/signin'>Ney York</FooterLink>
                                <FooterLink to ='/signin'>Mexico City</FooterLink>
                                <FooterLink to ='/signin'>Quebec</FooterLink>
                                <FooterLink to ='/sigin'>San Francisco</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ="/" onClick={toggleHome}>Glassview</SocialLogo>
                        <WebsiteRights>Glassview © { new Date().getFullYear() } All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href ="/" target="_blank" arial-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href ="/" target="_blank" arial-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href ="/" target="_blank" arial-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href ="/" target="_blank" arial-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href ="/" target="_blank" arial-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
