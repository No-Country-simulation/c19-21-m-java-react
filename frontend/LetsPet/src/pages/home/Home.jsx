import './Home.css'
import './styles/avatars-section.css'
import happyDog from './assets/happy-dog.png'
import avatar1 from './assets/onboarding-1.svg'
import avatar2 from './assets/onboarding-2.svg'
import avatar3 from './assets/onboarding-3.svg'
import arrow from './assets/arrow-1.png'
import { SobreNosotros } from './SobreNosotros.jsx'
import { Servicios } from './Servicios.jsx'
import { Testimonios } from './Testimonios.jsx'

function Home() {
    return (
        <div className='home'>
            <h1 className="baloo-2">Qué necesitas?</h1>
            <form className="form">
                <div className="div-form">
                    <div className="img-form">
                        <img src={happyDog} className="happy-dog" alt="Perrito feliz" />
                    </div>
                    <div className="div-btns">
                        <button type="submit">Encontrar cuidador</button>
                        <button type="submit">Encontrar paseador</button>
                        <div className='info-container'>
                            <label>Lugar
                                <input type="address" name="address" id="address" />
                            </label>

                            <label>Fecha
                                <input type="date" name="date" id="date" placeholder="Fecha" />
                            </label>
                        </div>
                        <div className="checkbox">
                            <div className='checkbox-subtitle'>
                                <h3>Tamaño de tu mascota</h3>
                            </div>
                            <label className='checkbox-subtitle'>
                                <div className='checkbox-container'>
                                    <input type="checkbox" name="checkbox" id="checkbox-pequeño" placeholder="Pequeño" />
                                    <label className='perro-pequeño'></label>
                                </div>
                                <div className='checkbox-container'>
                                    <input type="checkbox" name="checkbox" id="checkbox-mediano" placeholder="Mediano" />
                                    <label className='perro-mediano'></label>
                                </div>
                                <div className='checkbox-container'>
                                    <input type="checkbox" name="checkbox" id="checkbox-grande" placeholder="Grande" />
                                    <label className='perro-grande'></label>
                                </div>
                                <button id="search" type="submit">Buscar</button>
                            </label>
                            <h3>Hazte cuidador!</h3>
                        </div>
                    </div>
                </div>
            </form>

            <section className="section-como-funciona">
                <h2 className='subtitle-item'>Cómo funciona?</h2>
                <div className='avatars-section'>
                    <div className='col-avatar col-avatar-1'>
                        <img className='avatar avatar-1' src={avatar1} alt='Avatar 1' />
                        <p>Buscá tu cuidador o paseador en la fecha y zona que desees</p>
                    </div>
                    <img src={arrow} alt="Arrow icon" />
                    <div className='col-avatar col-avatar-2'>
                        <img className='avatar avatar-2' src={avatar2} alt='Avatar 2' />
                        <p>
                            Selecciona el paseador o cuidador de tu preferencia
                        </p>
                    </div>
                    <img src={arrow} alt="Arrow icon" />
                    <div className='col-avatar col-avatar-3'>
                        <img className='avatar avatar-3' src={avatar3} alt='Avatar 2' />
                        <p>
                            Concuerden los detalles del servicio y a disfrutar!
                        </p>
                    </div>
                </div>
            </section>
            <SobreNosotros />
            <Servicios />
            <Testimonios />
        </div>
    )
}

export default Home;