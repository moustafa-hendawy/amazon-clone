import axios from 'axios';

const instance = axios.create({
    baseUrl: "http://127.0.0.1:5001/challenge-81c50/us-central1/api", //error
});

export default instance
