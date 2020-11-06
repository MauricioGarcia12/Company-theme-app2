import React from 'react'
import
 { 
BtnWrap,Column1
,Column2,Heading,Img,ImgWrap
,InfoContainer,InfoRow,InfoWrapper,SubTitle
,TextWrapper,TopLine
} from './InfoElements';
import {Button} from '../ButtonElement'

const InfoSection = ({lightBg,id,img,topLine,lightText,
heading,darkText,description,buttonLabel,alt,imgStart,primary,dark,dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>

                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{heading}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button 
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exacts={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 :0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}

export default InfoSection
