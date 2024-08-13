import './styles/Testimonios.css'
import { Card } from './Card.jsx'

export const Testimonios = () => {
  return (
    <>
      <div className='testimonios'>
        <h2 className='titulo-testimonios'>Testimonios</h2>
        <div className='contenedor-testimonios'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className='btn-container'>
          <button className='btn-testimonio'>Busca un cuidador!</button>
          <button className='btn-testimonio'>Registrate</button>
        </div>
      </div>
    </>
  )
}
