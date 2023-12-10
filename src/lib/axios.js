import Axios from 'axios';

const axios = Axios.create({
    baseURL: "http://127.0.0.1/gamevote-laravel-back-end/public/api"
});

export default axios;