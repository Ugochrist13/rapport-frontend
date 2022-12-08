import axios from 'axios'

const baseURL = 'https://old-students-platform-backend.onrender.com/api/v1/auth'

const Api = axios.create({
    baseURL,
    headers: {
        'Accept': 'application/json'
    }
});

export default Api