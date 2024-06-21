import axios from 'axios';

export const key = "624382aec25fa393eeb78f1e8fb335c187f12bb4";

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
});

export default api;