import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './styles/UserSignup.css'
import UserService from '../services/UserService'
import gato from './assets/gato.png'

export const UserSignup = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  const saveUser = (e) => {
    e.preventDefault();

    const user = {
      name: nombre,
      lastName: apellido,
      age: edad
    }

    /* Implementando crear usuario */

    UserService.createUser(user).then(response => {
      console.log(response.data)
      navigate('/profile')
    }).catch(error => {
      console.log(error);
    })
  }

  /* Implementando Actualizar usuario */

  useEffect(() => {
    UserService.getUserById(id).then((response) => {
      setNombre(response.data.name);
      setApellido(response.data.apellido);
      setEdad(response.data.edad);
    }).catch(error => {
      console.log(error);
    })
  });

  return (
    <>
      <h2 className='register-title'>Registrarse en Lets Pet!</h2>
    <div className='register-container'>
      <div className='register-page'>
        <label className='label-registro' htmlFor="nombre">Nombre
        <input className='campos-registro' type="text" placeholder='Nombre' />
        </label>
        <label className='label-registro' htmlFor="apellido">Apellido
          <input className='campos-registro' type="text" placeholder='Apellido' />
        </label>
        <label className='label-registro' htmlFor="email">Email
          <input className='campos-registro' type="email" placeholder='Email' />
        </label>
        <label className='label-registro' htmlFor="contraseña">Contraseña
          <input className='campos-registro' type="password" placeholder='Contraseña' />
        </label>
        <label className='label-registro' htmlFor="contraseña">Confirmar contraseña
          <input className='campos-registro' type="password" placeholder='Confirmar contraseña' />
        </label>
        <div className='campo-terminos'>
        <input className='campo-checkbox' type='checkbox' /><label htmlFor="terminos">Acepto los términos y condiciones</label>
        </div>
        <button className='btn-registro'>Registrarme</button>
      </div>
      <div className='img-container'>
        <img className="img-gato" src={gato} alt="Gato con lana" />
      </div>
    </div>
    </>
  )
}

export default UserSignup;