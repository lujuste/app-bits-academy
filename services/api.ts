import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bitsacademy97370.api-us1.com/api/3',
});

export default api;
