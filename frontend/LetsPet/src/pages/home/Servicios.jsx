import './styles/Servicios.css'

export const Servicios = () => {
  return (
    <div className='servicios'>
      <h2 className='servicios-title'>Servicios</h2>
      <section className='contenedor-servicios'>
        <div className='card-back card-back-1'>
          <section className='card-container'>
            <article className='card-body'>
              <h3 className='card-title card-title-1'>Encuentra paseador/cuidador</h3>
              <p className='parrafo-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum velit ut, recusandae doloribus obcaecati cupiditate molestias esse quam laboriosam sit magni illo adipisci pariatur eaque nobis accusamus? Adipisci, voluptatem.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum velit ut, recusandae doloribus obcaecati cupiditate molestias esse quam laboriosam sit magni illo adipisci pariatur eaque nobis accusamus? Adipisci, voluptatem.</p>
              <button className='btn btn-buscar-cuidador'>Encontrar cuidador</button>
            </article>
          </section>
        </div>
        <div className='card-back card-back-2'>
          <section className='card-container'>
            <article className='card-body'>
              <h3 className='card-title card-title-2'>Hazte Paseador</h3>
              <p className='parrafo-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum velit ut, recusandae doloribus obcaecati cupiditate molestias esse quam laboriosam sit magni illo adipisci pariatur eaque nobis accusamus? Adipisci, voluptatem.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum velit ut, recusandae doloribus obcaecati cupiditate molestias esse quam laboriosam sit magni illo adipisci pariatur eaque nobis accusamus? Adipisci, voluptatem.</p>
              <button className='btn btn-paseador'>Hazte paseador!</button>
            </article>
          </section>
        </div>
        <div className='card-back card-back-3'>
          <section className='card-container'>
            <article className='card-body'>
              <h3 className='card-title card-title-3'>Hazte Cuidador</h3>
              <p className='parrafo-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum velit ut, recusandae doloribus obcaecati cupiditate molestias esse quam laboriosam sit magni illo adipisci pariatur eaque nobis accusamus? Adipisci, voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum velit ut, recusandae doloribus obcaecati cupiditate molestias esse quam laboriosam sit magni illo adipisci pariatur eaque nobis accusamus? Adipisci, voluptatem.</p>
              <button className='btn btn-cuidador'>Hazte cuidador!</button>
            </article>
          </section>
        </div>
      </section>
    </div>

  )
}