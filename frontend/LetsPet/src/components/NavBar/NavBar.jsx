import React from "react";
import petsLogo from './assets/letspet-png.png';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import './NavBar.css'


const NavBar = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <div className="navbar" id="sidebar">
            <img src={petsLogo} alt="Let's Pet Logo" className="letspet-logo" />
            <span><Link to='/' className="letspet-title">Lets Pet</Link></span>
            
            <ul className="menu">
                <Link className="nav-link" to='/servicios'>Servicios</Link>
                <Link className="nav-link" to='/sobre-nosotros'>Sobre Nosotros</Link>
                <Link className="nav-link" to='/como-funciona'>Cómo funciona?</Link>
                {
                    !isAuthenticated && (
                        <>
                            <Link className="nav-link" to='/iniciar-sesion'>Iniciar sesión</Link>
                            <Link className="nav-link" to='/registrarse'>Registrarse</Link>
                        </>
                    )}
                    {
                        isAuthenticated && (
                            <Link to='/profile'>Profile</Link>
                        )
                    }
            </ul>
        </div>
    );
}

export default NavBar;