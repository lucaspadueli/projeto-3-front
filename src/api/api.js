import axios from 'axios';
import { retrieveToken } from '../utils/local-storage.utils';

class Api {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL
    })

    this.api.interceptors.request.use((req) => {
      const token = retrieveToken();

      if(token) {
        req.headers.Authorization = `Bearer ${token}`;
      }

      return req;
    })
  }

  async signup({ username, email, password }) {
    try {
      const { data } = await this.api.post('/auth/signup', { username, email, password });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async login({ username, password }) {
    try {
      const { data } = await this.api.post('/auth/login', { username, password });
      return data;
    } catch (error) {
      throw error;
    }
  }

  verify = async (token) => {
    const { data } = await this.api.get('/auth/verify', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data;
  }
}


const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const api = new Api(apiUrl);

export default api;
