import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-spacecard.herokuapp.com/'
})

export default api;