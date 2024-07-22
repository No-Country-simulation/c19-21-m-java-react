import petsLogo from './assets/letspet-png.png'
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';



const NavBar = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <div className="navbar" id="sidebar">
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
        </div>
    );
}

export default NavBar;