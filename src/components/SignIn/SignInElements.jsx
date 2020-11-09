import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container =styled.div`
    height:100%;
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
    top: 10;
    z-index: 0;
    overflow:hidden;
    background: rgb(26,33,41);
    background: linear-gradient(90deg, rgba(26,33,41,1) 9%, rgba(24,96,140,1) 47%, rgba(55,122,163,1) 100%);

`;

export const FormWrap = styled.div`

        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;

`;

export const Icon = styled(Link)`
margin-left:32px;
margin-top:10px;
text-decoration:none;
color:white;
font-weight:bold;
font-size:1.2rem;

@media screen and(max-width:480px){
    margin-left:16px;
    margin-top:8px;
}

`;

export const FormContent = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and(max-width:480px){
        padding:10px;
    }
`;

export const Form = styled.form`
    background:#010101;
    max-width:400px;
    height:auto;
    width:100%;
    z-index: 1;
    display:grid;
    margin:0 auto;
    padding:80px 32px;
    border-radius:4px;
    box-shadow:0 1px 3px rgba(0,0,0,0.9);

    @media screen and(max-width:400px){
        padding:32px 32px;
    }
`;

export const FormH1= styled.h1`
margin-bottom:50px;
color:white;
font-size:1.5rem;
font-weight:400;
text-align:center;

    @media screen and(max-width:250px){
            font-size:.6px;
            margin:5px;
    }
`;

export const FormLabel = styled.label`
margin-bottom:8px;
font-size:1rem;
color:white;

@media screen and(max-width:250px){
            font-size:12px;
    }
`;

export const FormInput = styled.input`
    padding:10px 10px;
    margin-bottom:32px;
    border:none;
    border-radius:4px;
    font-size:19px;
    @media screen and(max-width:250px){
            font-size:12px;
    }
`;

export const FormButton = styled.button`
background-color:#18608C;
padding:16px 0%;
border:none;
border-radius:4px;
color:white;
font-size:1.2rem;
cursor:pointer;

&:hover{
    transition:all 0.3s ease-in-out;
    opacity:0.7;
    color:white;
}

    @media screen and(max-width:250px){
            font-size:12px;
    }

`;

export const Text = styled.span`
text-align:center;
margin-top:24px;
color:white;
font-size:18px;
padding-bottom:10px;
&:hover{
    text-decoration:underline;
    color:#18608C;
    cursor:pointer;
}

    @media screen and(max-width:250px){
            font-size:10px;
    }
`;