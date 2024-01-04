const { alanbaseApi } = require('../api');
require('dotenv').config();

const postGoals = async goals => {
  try {
    console.log('alanbase post goals');
    await alanbaseApi.post(
      `/goals/${process.env.ALANBASE_API_PATH_KEY}`,
      goals,
    );
  } catch (error) {
    console.log('error.data', error.response.data);
    // throw error;
  }
};

const postEvents = async events => {
  try {
    await alanbaseApi.post(
      `/events/${process.env.ALANBASE_API_PATH_KEY}`,
      events,
    );
  } catch (error) {
    console.log('error.data', error.response.data);
    // throw error;
  }
};

module.exports = { postGoals, postEvents };
