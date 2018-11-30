import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-23e89.firebaseio.com/'
});

export default instance;