import { BASE_SERVER_URL } from '@/config/consts';
import axios from 'axios';

export const http = axios.create({
    baseURL: BASE_SERVER_URL,
    // withCredentials: true,
});
