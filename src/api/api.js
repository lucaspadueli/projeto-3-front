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

  async signup({ username,name,gender, email, password }) {
    try {
      const { data } = await this.api.post('/auth/signup', { username, name, gender, email, password });
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

  async getMonthlyStatement( selectedMonth, selectedYear) {
    try {
      const { data } = await this.api.get(`/statement/${selectedMonth}/${selectedYear}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getOneOutcome (outcomeId){
    try {
      const {data} = await this.api.get(`/outcome/${outcomeId}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async editOutcome(outcomeId, updatedOutcome) {
    try {
      const {data} = await this.api.put(`/outcome/${outcomeId}`, updatedOutcome);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  removeOutcome = async (outcomeId) => {
    try {
      await this.api.delete(`/outcome/${outcomeId}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getOneIncome (incomeId){
    try {
      const {data} = await this.api.get(`/income/${incomeId}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  removeIncome = async (incomeId) => {
    try {
      await this.api.delete(`/income/${incomeId}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async editIncome(incomeId, updatedIncome) {
    try {
      const {data} = await this.api.put(`/income/${incomeId}`, updatedIncome);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserInfo() {
    try {
      const {data} = await this.api.get('/user-info');
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
