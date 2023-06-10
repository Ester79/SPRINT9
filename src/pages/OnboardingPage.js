import React, { useContext } from 'react';
import { AppContext } from '../components/context/provider';
import NavBar from '../components/common/NavBar';
import { useNavigate } from 'react-router-dom';
import { TitleCover } from '../styles/styled';
import { LoginStyle } from '../styles/styled';
import { Btn } from '../styles/styled';
import cocktail from '../img/cocktail.jpg';


const OnboardingPage = () => {
    const [state, setState] = useContext(AppContext);
    const navigate = useNavigate();
    const text = 'We have a wide variety of cocktails for every occasion. Take a look and contact us if you are interested in our catering service!'
    return (
        < >
            <NavBar></NavBar>
            <div className='d-flex container'>
                <div className='w-100'>
                    <LoginStyle>
                        <TitleCover>Wellcome {state.name}!</TitleCover>
                        <h4>{text}</h4>
                        <Btn className='btn  w-25 mt-3' onClick={() => navigate('/order-request/')} >START!</Btn>
                    </LoginStyle>
                </div>
                <img src={cocktail} height={600} alt="cc" />
            </div>
        </>
    );
}

export default OnboardingPage;

