import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const menu = {
        contact: 'CONTACT',
        home: 'HOME'
    };

    return (

        <nav className='navbar navbar-expand-lg navbar-light shadow'>
            <div className='container-fluid'>
                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls='navbarMenu' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarMenu'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link style={{ textDecoration: 'none' }} to="/onboarding/">{menu.home}</Link>
                        </li>
                        <li className='nav-item'>
                            <Link style={{ textDecoration: 'none' }} to="/contact/">{menu.contact}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}



export default NavBar
