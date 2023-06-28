import styled from 'styled-components'
import fundo from '../../assets/backgraoud.jpg'
import { Link } from 'react-router-dom';
export const Container = styled.div`
background:url('${fundo}' );
background-size:cover;
display:flex;
flex-direction:column;
align-items:center;
gap:40px;
height:100%;

`;

export const Imagem = styled.img`
margin-top:30px;



`;
export const ContainerIntes = styled.div`

background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;

padding: 50px 36px;
height:100vh;
display:flex;
flex-direction:column;
//gap:30px;
`;


export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
margin-bottom:80px;

`;

export const InputLabel = styled.p`
letter-spacing: -0.408px;
color: #EEEEEE;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
margin-left:25px;

`;

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border:none;
outline:none;
margin-bottom:25px;
padding-left:25px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #FFFFFF;

`;

export const Button = styled(Link)`

width: 342px;
height: 74px;
color: #FFFFFF;
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
border:none;
cursor: pointer;
text-decoration:none;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;

display:flex;
align-items:center;
justify-content:center;
gap:20px;
margin-top:132px;

&:hover{
    opacity:0.8;
}
 &:active{
    opacity:0.5;
 }
`;

export const ImgFlecha = styled.img`

`

