import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { Button } from 'rsuite';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <nav
                className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='' className='menu-bars'>
                            <FaWindowClose className='icon_close' />
                        </Link>
                    </li>
                    <li className="nav-text-menu">
                        <span>MENÚ</span>
                    </li>

                    <li className="nav-text">
                        <Link to="/login">
                            <span>Iniciar Sesión</span>
                        </Link>
                    </li>

                    <li className="nav-text">
                        <Link to="/register">
                            <span>Crear cuenta</span>
                        </Link>
                    </li>
                </ul>
                <div className={sidebar ? 'menu_footer active' : 'menu_footer'}>
                    <a href='http://www.facebook.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaFacebook /></a>
                    <a href='http://www.linkedin.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaLinkedin /></a>
                    <a href='http://www.instagram.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaInstagramSquare /></a>
                    <a href='http://www.twitter.com/' rel="noopener noreferrer" target="_blank" className='icon'><FaTwitterSquare /></a>
                </div>
            </nav>
            <div className="navbar">
                <Link to="" className='menu-bars'>
                    <FaBars onClick={showSidebar} className='icon_menu' />
                </Link>
                <Link to="/login">
                    <button className='header_button'>
                        Iniciar Sesión
                    </button>
                </Link>
                <Link to="/register">
                    <button className='header_button'>
                        Crear cuenta
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar