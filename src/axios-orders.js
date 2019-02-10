import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-b2950.firebaseio.com/'
});

export default instance;