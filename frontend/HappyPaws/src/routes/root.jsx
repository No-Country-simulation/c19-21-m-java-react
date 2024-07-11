import { Link, NavLink } from "react-router-dom"
import reactLogo from '../assets/cuidador-de-mascota.jpg';

export default function Root() {
    return (
        <>
            <NavLink id="sidebar" >
                <ul className="menu">
                    <Link to='#'>Servicios</Link>
                    <Link to='#'>Sobre Nosotros</Link>
                    <Link to='#'>Cómo funciona?</Link>
                    <Link to='#'>Registrarse</Link>
                </ul>
            </NavLink>
            <h1>Welcome to Happy Paws 🐶🐱</h1>
            <form>
                    <legend style={{textAlign: 'start', padding: '1rem 0 0 3rem', color: 'black'}}>Que necesitas?</legend>
                <div className="div-form">
                    <div className="div-btns">
                        <button type="submit">Encontrar cuidador</button>
                        <button type="submit">Encontrar paseador</button>
                    </div>
                    <input type="address" name="address" id="address" placeholder="Lugar" />
                    <input type="date" name="date" id="date" placeholder="Fecha" />
                    <Link to="#" className="logo">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </Link>
                </div>
                <div className="div-btns">
                    <button type="submit">Conoce a nuestros cuidadores</button>
                </div>
            </form>

            <section>
                <h2 style={{color: 'black', marginTop: '20%', padding: 0, marginBottom: 0}}>Cómo funciona?</h2>
                <div className="container" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <img src={reactLogo} alt="Image 1" />
                    <img src={reactLogo} alt="Image 2" />
                    <img src={reactLogo} alt="Image 3" />
                </div>
            </section>
        </>
    )
}