import React, { useContext } from 'react'
import NavBar from '../components/common/NavBar';
import { TitleCover } from '../styles/styled';
import { LoginStyle } from '../styles/styled';
import { AppContext } from '../components/context/provider';
import { Btn } from '../styles/styled';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const [state, setState] = useContext(AppContext);
    const text = 'Just click on the button, and we will put in contact with you soon!';

    const navigate = useNavigate();
    return (
        <div>
            <NavBar></NavBar>
            <LoginStyle>
                <TitleCover>Thank you {state.name}! </TitleCover>
                <h4>{text}</h4>
                <Btn className='btn  w-25 mt-3' onClick={() => navigate('/bye/')} >Click to contact!</Btn>
            </LoginStyle>
        </div>
    )
}

export default ContactPage
