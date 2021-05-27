import axios from 'axios';

const API_URL = 'http://api.exchangeratesapi.io/v1/';

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default API;
