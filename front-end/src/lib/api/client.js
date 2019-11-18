import axios from 'axios';

const client = axios.create();

// client.defaults.baseURL = 'https://external-api-server.com';
client.defaults.baseURL = 'http://localhost:3000';

client.defaults.headers.common['authorization'] = '1234';
client.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default client;
