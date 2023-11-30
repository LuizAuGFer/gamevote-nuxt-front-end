import Axios from 'axios';

const axios = Axios.create({
    baseUrl: "http://192.168.1.7/gamevote-laravel-back-end/public/"
});

export default axios;