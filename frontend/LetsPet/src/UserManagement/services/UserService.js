import axios from 'axios';

const USER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/users';

class UserService {
    getAllUsers() {
        return axios.get(USER_BASE_REST_API_URL);
    }

    createUser(user) {
        return axios.post(USER_BASE_REST_API_URL, user);
    }

    getUserById(id) {
        return axios.get(USER_BASE_REST_API_URL + '/' + id);
    }
    
    updateUser(user) {
        return axios.put(USER_BASE_REST_API_URL + '/' + user.id, user);
    }
    
    deleteUser(id) {
        return axios.delete(USER_BASE_REST_API_URL + '/' + id);
    }

    registerUser(user) {
        return axios.post(USER_BASE_REST_API_URL + '/register', user);
    }

    loginUser(user) {
        return axios.post(USER_BASE_REST_API_URL + '/login', user);
    }

    logoutUser() {
        return axios.get(USER_BASE_REST_API_URL + '/logout');
    }
}

export default new UserService();