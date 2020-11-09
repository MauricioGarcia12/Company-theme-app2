import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';



export const Nav= styled.div`
    background-color:${({scrollNav})=>(scrollNav ? '#141211':'#141211')};
    height:65px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`;

export const NavbarContainer= styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 20px;
    max-width:1100px;
`;

export const NavLogo = styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:5px;
font-weight:bold;
text-decoration:none;
`;

export const MobileIcon = styled.div`

display:none;
@media screen and (max-width:960px){
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform:translate(-100%,60%);
    font-size:1.5rem;
    cursor: pointer;
    color:white;
}
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:20px;
    @media screen and (max-width:760px){
        display:none;
    }
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color:white;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor: pointer;
font-size: .8rem;
&.active{
    border-bottom:3px solid #18608C;
}
`;

export const NavBtn=styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:760px){
    display:none;
}
`;

export const NavBtnLink=styled(LinkR)`
border-radius:50px;
background-color:#18608C;
white-space:nowrap;
padding:10px 18px;
color:#141211;
font-size:0.8rem;
outline:none;
border:none;
cursor: pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all 0.2 ease-in-out;
    background-color:#fff;
    color:#141211;
}

`;