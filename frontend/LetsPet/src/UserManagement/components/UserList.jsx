import userAdapters from '../adapters/userAdapters';
import './styles/UserList.css'
import React from 'react';

const UserList = () => {

    const users = userAdapters();

    return (
        <div className='user-container'>
            <h2 className='text-center'>Lista de usuarios</h2>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;


