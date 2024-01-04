const { default: axios } = require('axios');
require('dotenv').config();

const turboApi = axios.create({
  baseURL: process.env.TURBO_API_URL,
  headers: {
    'x-alanbase-api-key': process.env.TURBO_API_KEY,
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
