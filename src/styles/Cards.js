import styled from "styled-components"
import "@fontsource/montserrat"
import { Button, Form, Modal } from "react-bootstrap"
export const Card = styled.div`
border-radius:16px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
width:140px;
height:230px;
z-index:0;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, #000000 100%);
display:flex;
align-items:flex-end;
color:white;

`
export const Img = styled.img`
`
export const CustomButton = styled.button`
border-radius:100%;
border:none;
background: linear-gradient(180deg, rgba(88, 88, 88, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%);
height:30px;
width:30px;
margin-right:12px;`
export const ButtonsContainer = styled.div`
display:flex;
position:relative;
bottom:10px;
right:155%`
export const Tipo = styled.div`
display:flex;
align-items:center;
justify-content:left;
text-align:left;
position:relative;
bottom:190px;
margin-left:54%;

border-radius: 20px 0px 0px 20px;
background:linear-gradient(180deg, #ED1D24 0%, #ED1F69 100%);
height:24px;
`
export const H3Tipo = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 100%;
margin-top:5px;
margin-left:10px;
margin-right:5px;
text-align:center;
width:50px;`

export const H3Ciudad = styled.h3`
position: relative;
right:90%;
Bottom:30%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;`
export const H1Nombre = styled.h1`
position: relative;
right:125%;
bottom: 20%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;`

export const CustomInput = styled(Form.Control)`
border-radius:20px;
width:100%;
`

export const Title = styled.h1`
color: #F2264B;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;`
export const Search = styled.div`
display:flex
`
export const SearchButton = styled(Button)`
background-color:white;
background:none;
border:none;
position:relative;
right:50px;
margin-right:-40px;
&:hover{
    background-color:rgba(255,255,255,0);
}

`
export const ClearButton = styled.button`

border:none;
background-color:white;
color:#B7B7C8;
width:47px;

`
export const Container = styled.div`

margin:0 20% 0 20%;`

export const Header = styled.div`
display:flex;
margin:0 20% 0 20%;
justify-content:space-between;`

export const AddChar = styled.button`
border:none;
background-color:white;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 100%;
color:#B7B7C8`

export const CustomForm = styled(Form)`
margin:0 3% 2% 18.5%;`
export const CustomModal = styled(Modal)`
border-radius:8px;
color:white;
font-family: 'Montserrat';
*>h5{
    font-weight: 500;
font-size: 14px;
line-height: 100%;
color:rgba(255,255,255,0.75)
};
*>h4{
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;
}
*>h1{
    font-style: normal;
font-weight: 900;
font-size: 40px;
line-height: 100%;
}

`