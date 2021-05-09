import axios from 'axios';

export const reqResApi = axios.create({
  // tendremos todas las propidades
  baseURL: 'https://reqres.in/api'
})