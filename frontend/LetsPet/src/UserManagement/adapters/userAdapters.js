import UserService from "../services/UserService";
import { useState, useEffect } from "react";


const userAdapters = () => {    
    const [mappedUsers, setMappedUsers] = useState([])
    
    useEffect(() => {
      const fetchUsers = async () => {
        const users = await UserService.getAllUsers();
        const mappedUsers = users.map((user) => ({
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            edad: user.edad
      }));
        setMappedUsers(mappedUsers);
      };
      fetchUsers();
    }, []);
    return mappedUsers;
};

export default userAdapters;