import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../components/context/provider';
import { LoginStyle } from '../styles/styled';
import { TitleCover } from '../styles/styled';


const ByePage = () => {
    const [state, setState] = useContext(AppContext);
    const [message, setMessage] = useState('');

    const client = 'Nice! we will contact you the following 3 days!';
    const notClient = 'We hope to see you again in the future!';

    useEffect(() => {
        customer(state.age)
    }, [])

    const customer = value => {
        value = state.age;

        if (value >= 18) {
            setMessage(client)
        } else {
            setMessage(notClient)
        }
    }

    return (
        <LoginStyle><TitleCover>{message}  {state.name}</TitleCover></LoginStyle>
    )
}

export default ByePage
