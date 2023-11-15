const { default: axios } = require('axios');
require('dotenv').config();

const turboApi = axios.create({
  baseURL: process.env.TRAFFLOW_API_URL,
  headers: {
    'x-trafflow-api-key': process.env.TRAFFLOW_API_KEY,
  },
});

const alanbaseApi = axios.create({
  baseURL: process.env.ALANBASE_API_URL,
  headers: {
    'API-KEY': process.env.ALANBASE_API_KEY,
  },
});

module.exports = {
  turboApi,
  alanbaseApi,
};
