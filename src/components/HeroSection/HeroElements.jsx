import styled from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'
export const HeroContainer = styled.div`
    background-color:#0c0c0c;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    height:550px;
    position:relative;
    z-index:1;
    :before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        background-color:
        linear-gradient(
            180deg,
          rgba(0,0,0,0.2)0%,
            rgba(0,0,0,0,0)
            100%),
        linear-gradient(
            180deg,
            rgba(0,0,0,0.2)0%,
            transparent 100%
        );
        z-index: 2;
        margin-top:-80px;
    }
`;

export const HeroBg=styled.div`
position:absolute;
top:0;
right:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;

export const VideoBg = styled.video`
width:100%;
-o-object-fit:cover;
background-color:#222a34;

@media screen and (max-width:320px){
    height:100%;
    width: 100%;
}
`;

export const HeroContent=styled.div`

z-index:3;
max-width:1200px;
position:absolute;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;
`;

export const HeroH1=styled.h1`
color:white;
font-size:3rem;
text-align:center;

@media screen and(max-width:760px){
    font-size:2.2rem;
}
@media screen and(max-width:480px){
    font-size:1.6rem;
}
`;

export const HeroP=styled.p`

margin-top:24px;
color:white;
font-size:1.7rem;
text-align:center;
max-width:600px;
@media screen and(max-width:760px){
    font-size:1rem;
}
@media screen and(max-width:480px){
    font-size:0.8rem;
}
`;

export const HeroWrapper = styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items: center;
`;


export const ArrowForward=styled(MdArrowForward)`
    margin-left:8px;
    font-size:20px;

`;
export const ArrowRight=styled(MdKeyboardArrowRight)`
    
    margin-left:8px;
    font-size:20px;
`;