import axios from 'axios';

const API_URL = 'http://localhost:5000/api/stocks';

export const getStocks = () => {
  return axios.get(API_URL);
};

export const addStock = (stock) => {
  return axios.post(API_URL, stock);
};
