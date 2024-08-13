import axios from 'axios';

const CARE_PET_BASE_REST_API_URL = 'http://localhost:8080/api/v1/cuidadores';

class CarePetService {
    getAllCarePets() {
        return axios.get(CARE_PET_BASE_REST_API_URL);
    }

    createCarePet(carePet) {
        return axios.post(CARE_PET_BASE_REST_API_URL, carePet);
    }

    getCarePetById(id) {
        return axios.get(CARE_PET_BASE_REST_API_URL + '/' + id);
    }
    
    updateCarePet(carePet) {
        return axios.put(CARE_PET_BASE_REST_API_URL + '/' + carePet.id, carePet);
    }
    
    deleteCarePet(id) {
        return axios.delete(CARE_PET_BASE_REST_API_URL + '/' + id);
    }

    registerCarePet(carePet) {
        return axios.post(CARE_PET_BASE_REST_API_URL + '/register', carePet);
    }

    loginCarePet(carePet) {
        return axios.post(CARE_PET_BASE_REST_API_URL + '/login', carePet);
    }

    logoutcarePet() {
        return axios.get(CARE_PET_BASE_REST_API_URL + '/logout');
    }
}

export default new CarePetService();