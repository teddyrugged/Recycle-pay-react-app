import axios from 'axios';

const recyclePayRequest = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 0,
});

export default recyclePayRequest;
