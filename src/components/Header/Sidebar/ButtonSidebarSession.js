import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import useUser from '../../../hooks/useUser';

function ButtonSidebarSession() {
    const { logOut, isLogged } = useUser();
    const icon_close = () => {
        logOut();
        localStorage.clear();
    }

    return (
        <li className="nav-text-user" onClick={() => { icon_close(); window.location.reload(); }}>
            <div className='nav-text-user'>
                <p className='avatar_user'> {JSON.parse(localStorage.getItem("avatar"))}</p>
                <p className='name_user'> ¡Hola  {JSON.parse(localStorage.getItem("username"))}! </p>
            </div>
            <button className='button_close_sesion'> Cerrar Sesión <FaWindowClose className='icon_close_sesion' /> </button>
        </li>
    )
}

export default ButtonSidebarSession