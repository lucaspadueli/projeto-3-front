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

  async addIncome (income){
    try {
      const {data} = await this.api.post('/income',income);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async addOutcome (outcome){
    try {
      const {data} = await this.api.post('/outcome',outcome);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getIncomes () {
    try {
      const {data} = await this.api.get('/income');
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}



const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const api = new Api(apiUrl);

export default api;
