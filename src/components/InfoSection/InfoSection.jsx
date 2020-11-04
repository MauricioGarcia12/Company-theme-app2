import React from 'react'
import
 { 
BtnWrap,Column1
,Column2,Heading,Img,ImgWrap
,InfoContainer,InfoRow,InfoWrapper,SubTitle
,TextWrapper,TopLine
} from './InfoElements';

import {Button} from 'react-scroll'
const InfoSection = () => {
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>

                        <Column1>
                            <TextWrapper>
                                <TopLine>Top Line</TopLine>
                                <Heading>Heading</Heading>
                                <SubTitle>Subtitle</SubTitle>
                                <BtnWrap>
                                    <Button to="home"/>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img/>
                            </ImgWrap>
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}

export default InfoSection
