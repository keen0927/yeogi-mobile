import axios from 'axios';

const baseURL = (() => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000/'
  }  else {
    return '/'
  }
})();

const client = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  }
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default client;
