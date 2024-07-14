import { Link, NavLink } from "react-router-dom"
import reactLogo from '../assets/happy-dogs.jpg';
import viteLogo from '../assets/happy-dog.jpg'

export default function Root() {
    return (
        <>
            <NavLink className="navbar" to="#" id="sidebar" >
                <ul className="menu">
                    <Link to='#'>Servicios</Link>
                    <Link to='#'>Sobre Nosotros</Link>
                    <Link to='#'>Cómo funciona?</Link>
                    <Link to='#'>Registrarse</Link>
                </ul>
            </NavLink>
            <h1>Welcome to Happy Let's Pet 🐶🐱</h1>
            <form>
                    <legend style={{textAlign: 'start', padding: '1rem 0 0 3rem', color: 'black', fontStyle: 'italic', fontWeight: 'bolder', fontSize: '20px', margin: '0'}}>Que necesitas?</legend>
                <div className="div-form">
                    <div className="div-btns">
                        <button type="submit">Encontrar cuidador</button>
                        <button type="submit">Encontrar paseador</button>
                        <input type="address" name="address" id="address" placeholder="Lugar" />
                        <input type="date" name="date" id="date" placeholder="Fecha" />
                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox-pequeño" placeholder="Pequeño" />
                            <label htmlFor="checkbox-pequeño" id="checkbox-pequeño">Pequeño</label>
                        </div>
                       <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox-mediano" placeholder="Mediano" />
                            <label htmlFor="checkbox-mediano" id="checkbox-mediano">Mediano</label>
                       </div>
                       <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox-grande" placeholder="Grande" />
                            <label htmlFor="checkbox-grande" id="checkbox-grande">Grande</label>
                            <button id="search" type="submit">Buscar</button>
                       </div>
                    </div>
                    <Link to="#" className="logo">
                        <img src={viteLogo} className="logo react" alt="React logo" />
                    </Link>
                </div>
            </form>

            <section>
                <h2 style={{color: 'black', marginTop: '10%', padding: 0, marginBottom: 0, fontSize: '40px'}}>Cómo funciona?</h2>
                <div className="container">
                    <img src={reactLogo} alt="Image 1" className="happy-dogs"/>
                    <img src={reactLogo} alt="Image 2" className="happy-dogs"/>
                    <img src={reactLogo} alt="Image 3" className="happy-dogs"/>
                </div>
            </section>
        </>
    )
}