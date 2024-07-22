/* eslint-disable react/no-unescaped-entities */
import './Home.css'
import viteLogo from './assets/happy-dog.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <h1>Qué necesitas?</h1>
            <form className="form">
                    <Link to="#" className="logo">
                        <img src={viteLogo} className="logo react" alt="React logo" />
                    </Link>
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
                </div>
            </form>

            <section>
                <h2 style={{ color: 'black', marginTop: '10%', padding: 0, marginBottom: 0, fontSize: '40px' }}>Cómo funciona?</h2>
                <div className="container">
                </div>
            </section>


        </div>
    )
}

export default Home;