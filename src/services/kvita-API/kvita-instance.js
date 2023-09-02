import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://kvita.onrender.com/api',
});
