import testimonio1 from './assets/testimonio-1.png'
/* import testimonio2 from './assets/testimonio-1.png'
import testimonio3 from './assets/testimonio-1.png' */
import patita from './assets/foundation_paw.png'

export const Card = () => {
    return (
        <div className='card-testimonios'>
            <img className='img-testimonios' src={testimonio1} alt="Testimonio 1" />
            <section className='body-testimonios'>
                <div className='patita-container'>
                    <img className='img-patita' src={patita} alt="patita" />
                    <img className='img-patita' src={patita} alt="patita" />
                    <img className='img-patita' src={patita} alt="patita" />
                    <img className='img-patita' src={patita} alt="patita" />
                    <img className='img-patita' src={patita} alt="patita" />
                </div>
                <h3 className='nombre-testimonios'>Mariano</h3>
                <p className='descripcion-testimonios'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, expedita vero repudiandae fugiat odio asperiores quasi similique officiis culpa, enim esse assumenda nam molestiae ratione aliquid earum? Deserunt, vitae? Eos?</p>
            </section>
        </div>
    )
}
