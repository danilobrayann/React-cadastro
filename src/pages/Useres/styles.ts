import styled from 'styled-components'
import fundo from '../../assets/backgraound1.svg'

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
backdrop-filter: blur(45px);
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



export const Button = styled.button`

width: 342px;
height: 74px;
color: #FFFFFF;
background: transparent;
border-radius: 14px;
border:1px solid white;
cursor: pointer;
margin-top:120px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;

display:flex;
align-items:center;
justify-content:center;
gap:20px;

&:hover{
    opacity:0.8;
}
 &:active{
    opacity:0.5;
 }
`;

export const ImgFlecha = styled.img`
  transform: scaleX(-1);
`
export const User = styled.li`
display:flex;
justify-content:space-around;
align-items:center;
height:50px;
width:342;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border:none;
outline:none;
margin-bottom:25px;
margin-top:25px;

p{
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #FFFFFF;
}

button{
    background:none;
    border:none;
    cursor: pointer;
}

`
