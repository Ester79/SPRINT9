import React from 'react';
import { useNavigate } from "react-router-dom";
import { Cover, ButtonCover, TitleCover } from '../styles/styled';


const WellcomePage = () => {

    const title = 'Fantastic Cocktails';
    const navigate = useNavigate();
    const goToLoginPage = () => {
        navigate("/login/")
    };
    return (
        <Cover>
            <TitleCover>{title}</TitleCover>
            <ButtonCover><button className='btn btn-dark btn-lg' onClick={goToLoginPage} >CLICK ME</button></ButtonCover>
        </Cover>
    );
};

export default WellcomePage
