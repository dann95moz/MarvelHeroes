import styled from "styled-components"
import "@fontsource/montserrat"
import { Button, Form, Modal } from "react-bootstrap"
export const Card = styled.div`
border-radius:16px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
width:140px;
height:230px;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, #000000 100%);
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
margin-right:12px;
`
export const ButtonsContainer = styled.div`
display:flex;
position:relative;
bottom:8px;
left:10px;`
export const Tipo = styled.div`
display:flex;
align-items:center;
justify-content:left;
text-align:left;
position:relative;
top:20px;
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
width:50px;
&:hover{
    color:#f7c5cc;
}`

export const H3Ciudad = styled.h3`
position: relative;
margin-top:85%;
margin-left:10px;
margin-bottom:15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
white-space: nowrap;
&:hover{
    color:#f7c5cc;
}`
export const H1Nombre = styled.h1`
margin-left:10px;
position: relative;
bottom:10px;
color:white;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
white-space:nowrap;
&:hover{
    color:#f7c5cc;
}`

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
export const Container2 = styled.div`
display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
  gap: 24; 
  grid-template-areas: 
    ". . . . ."
    ". . . . ."
    ". . . . ."; 
  justify-content: center; 
  align-content: center; 
  justify-items: center; 
  align-items: center; 

margin:10px 18% 20px 18%;
@media (max-width: 910px) {
    display:grid;
    grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 24px 0px; 
  grid-template-areas: 
    ". . "
    ". . "
    ". . "; 
   
}
`

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
h5{
    margin:5px 0;
    font-weight: 500;
font-size: 14px;
line-height: 100%;
color:rgba(255,255,255,0.75)
};
h4{
    margin:5px 0;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;
}
h1{
    font-style: normal;
font-weight: 900;
font-size: 40px;
line-height: 100%;
}

`