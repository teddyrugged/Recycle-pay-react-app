import axios from 'axios';

const recyclePayRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export default recyclePayRequest;
