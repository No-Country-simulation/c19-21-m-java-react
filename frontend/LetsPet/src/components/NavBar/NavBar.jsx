import React from "react";
import petsLogo from './assets/petsLogo.png'
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { css } from "@emotion/react";


const headerNav = css({
    height: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    color: '#f2ddb2',
})

const NavBar = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <headerNav className="navbar" id="sidebar">
            <Link to='/'><img src={petsLogo} alt="Let's Pet Logo" className="letspet-logo" /></Link>
            <ul style={{display: 'flex', width: '90vw', alignItems: 'center', height: '10vh', margin: '0'}} className="menu">
                <Link to='/servicios'>Servicios</Link>
                <Link to='/sobre-nosotros'>Sobre Nosotros</Link>
                <Link to='/como-funciona'>Cómo funciona?</Link>
                {
                    !isAuthenticated && (
                        <>
                            <Link to='/iniciar-sesion'>Iniciar sesión</Link>
                            <Link to='/registrarse'>Registrarse</Link>
                        </>
                    )}
                    {
                        isAuthenticated && (
                            <Link to='/profile'>Profile</Link>
                        )
                    }
            </ul>
        </headerNav>
    );
}

export default NavBar;