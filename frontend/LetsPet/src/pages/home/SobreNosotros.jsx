import './styles/SobreNosotros.css'
import team from './assets/sobre-nosotros-team.png'

export const SobreNosotros = () => {
  return (
    <div className='sobre-nosotros'>
        <h2 className='subtitle-sobre-nosotros'>Sobre Nosotros</h2>
        <div className='container'>
            <section className='child-container'>
                <article className='article article-1'>
                    <p className='parrafo-sobre-nosotros'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt veniam ab. Officiis quae odio minus officia dolores eveniet amet aut illo qui magni adipisci, fugiat reprehenderit alias veniam sint.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt veniam ab. Officiis quae odio minus officia dolores eveniet amet aut illo qui magni adipisci, fugiat reprehenderit alias veniam sint.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt veniam ab. Officiis quae odio minus officia dolores eveniet amet aut illo qui magni adipisci, fugiat reprehenderit alias veniam sint.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt veniam ab. Officiis quae odio minus officia dolores eveniet amet aut illo qui magni adipisci, fugiat reprehenderit alias veniam sint.
                    </p>
                </article>
                <article className='article article-2'>
                    <p className='parrafo-sobre-nosotros'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quibusdam. Totam, maiores. Laudantium itaque laboriosam incidunt sapiente esse delectus accusamus odio, sed facilis doloremque libero veritatis dolorum, autem quos animi!
                    </p>
                    <img className='team-img' src={team} alt="Sobre Nosotros Team" />
                    <p className='parrafo-team'>Lets Pet Crew</p>
                </article>
            </section>
        </div>
    </div>
  )
}