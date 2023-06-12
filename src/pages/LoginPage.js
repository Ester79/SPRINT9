import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../components/context/provider';
import ModalComponent from '../components/common/Modal';
import { LoginStyle } from '../styles/styled';
import { InputsForm } from '../styles/styled';
import { Btn } from '../styles/styled';
import { TitleCover } from '../styles/styled';


const initialModaltState = {
    visible: false,
    title1: null,
    text: null,
    buttonText: null,
}

const LoginPage = () => {
    const [state, setState] = useContext(AppContext);
    const [showModal, setShowModal] = useState({ ...initialModaltState });

    let name = useRef(null);
    let email = useRef(null);
    let age = useRef(null);

    const navigate = useNavigate();
    const title = 'Thanks for your interest!';
    const text = 'We would like to have you as a client. Would you provide us some information about you? '
    const signIn = 'SIGN IN';
    const title1ErrorLogin = 'Incomplete login';
    const textErrorLogin = 'Please, complete all fields';
    const title1UnderAge = 'ACCESS DENIED';
    const textUnderAge = 'You are missing some anniversaries to celebrate and gain access. We hope to see you again!';

    const saveLogin = () => {
        if (state.name && state.email && state.age >= 18) {

            localStorage.setItem('Name: ', JSON.stringify(state.name));
            localStorage.setItem('Email: ', JSON.stringify(state.email));
            navigate('/onboarding/');
        }
        if (!state.name || !state.email || !state.age) {
            setShowModal({ ...showModal, visible: true, title1: title1ErrorLogin, text: textErrorLogin, buttonText: 'Let me check again' });

        }
        if (state.name && state.email && state.age < 18) {
            setShowModal({ ...showModal, visible: true, title1: title1UnderAge, text: textUnderAge, buttonText: 'Understood' });

        }
    };

    const hideModal = () => {
        if (state.name && state.email && state.age < 18) {
            setShowModal({ ...showModal, visible: false })
            navigate('/bye/')
        } else {
            setShowModal({ ...showModal, visible: false })
        }
    }

    return (

        <>
            <LoginStyle>
                <TitleCover>{title}</TitleCover>
                <h3>{text}</h3>
                <InputsForm>
                    <div className='container shadow-lg bg-body-tertiary rounded p-5'>
                        <div className='form-outline pb-3 pt-3'>
                            <input type='text' id='formName' className='form-control' ref={name} placeholder='Whats your name?' name='name' onChange={() => { setState({ ...state, name: name.current.value }) }} />
                        </div>
                        <div className='form-outline pb-3'>
                            <input type='email' id='formEmail' className='form-control' ref={email} placeholder='Your email is...' name='email' onChange={() => { setState({ ...state, email: email.current.value }) }} />
                        </div>
                        <div className='form-outline pb-3'>
                            <input type='number' id='formAge' className='form-control' ref={age} min={0} placeholder='How old are you?' name='age' onChange={() => { setState({ ...state, age: age.current.value }) }} />
                        </div>
                        <Btn type='button' className='btn  w-100 mb-3' onClick={saveLogin}>{signIn}</Btn>

                    </div>
                </InputsForm>
            </LoginStyle>
            {showModal.visible && <ModalComponent showModal={showModal.visible} closeModal={hideModal} title1={showModal.title1} textMessage={showModal.text} confirmButton={hideModal} buttonText={showModal.buttonText} />}
        </>
    );
};

LoginPage.propTypes = {
    visible: PropTypes.bool,
    title1: PropTypes.string,
    text: PropTypes.string,
    hideModal: PropTypes.func,
}

export default LoginPage;
