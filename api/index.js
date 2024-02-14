import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.199.123:8080/api' });

