import styled from "styled-components";
import imageCover from '../img/cover.jpg'

export const Cover = styled.div`
background-image: url(${imageCover});
  height: 650px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const ButtonCover = styled.div`
text-align: center;
color: white;
padding-top: 200px;
height: 100px;
`

export const TitleCover = styled.div`
text-align: center;
color: black;
font-size: 80px;
font-weight: bold;
border: 1px solid white;
`


export const LoginStyle = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
height: 600px;
align-items: center;

`

export const InputsForm = styled.div`
width: 30%;
margin: 40px;
border-radius: 20px;
background-color: black;
`

export const Btn = styled.button`
background-color: crimson;
color: white;
`











