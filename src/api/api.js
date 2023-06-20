import axios from 'axios';

class Api {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL
    });
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
}

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const api = new Api(apiUrl);

export default api;
