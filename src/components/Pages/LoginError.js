import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import "../../styles/Components/Login.css";
import "../../styles/General/Icons.css";

function LoginError() {
    return (
        <div className='loginErrorContainer'>
            <div className='loginErrorFlex'>
                <span><RiErrorWarningFill className='warningIcon' /></span>
                <p>Para realizar una reserva necesitas estar logueado</p>
            </div>
        </div>
    )
}

export default LoginError