import React, { useEffect, useState } from 'react'
import { Form, useNavigate, useParams } from 'react-router-dom'
import './styles/UserSignup.css'
import UserService from '../services/UserService'
import { Link } from 'react-router-dom'
import Textfield from '@mui/material/TextField';
import { Button } from '@mui/material'

export const UserSignup = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();

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

/* Identifica el titulo según el id */
  const title = () => {
    if (id) {
    return <h2 className='Actualizar usuario'>Actualizar usuario</h2>
  } else {
    return <h2 className='text-center'>Registrar usuario</h2>
  }
}

  return (
    <div className='signup-container'>
      <Form onSubmit={saveUser} className='signup-form'>
        <h2 className='text-center'>{title()}</h2>
        <Textfield className='textfield' type="text" placeholder='Nombre' value={nombre} id="filled-basic" label="Nombre" variant="filled" 
        onChange={(e) => setNombre(e.target.value)}/>
        <Textfield className='textfield' id='filled-basic' label="Apellido" variant="filled" type="text" placeholder='Apellido' value={apellido} 
        onChange={(e) => setApellido(e.target.value)}/>
        <Textfield className='textfield' id='filled-basic' label="Edad" variant="filled" type="number" placeholder='Edad' value={edad} 
        onChange={(e) => setEdad(e.target.value)}/>
        <Button type='submit' className='btn btn-success' variant='contained'
        onClick={(e) => saveUser(e)}>Guardar </Button>
        &nbsp;&nbsp;
        <Button className='btn-cancel' href='/' variant='contained' color='error'>Cancelar</Button>
      </Form>
    </div>
  )
}

export default UserSignup;