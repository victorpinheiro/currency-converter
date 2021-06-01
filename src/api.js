import axios from 'axios';

const API_URL = 'https://api.exchangerate.host/';

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default API;
