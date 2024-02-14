const { alanbaseApi } = require('../api');
require('dotenv').config();

const buildErrorInfo = (errorData, initialData) => {
  return Object.keys(errorData.errors).reduce((acc, key) => {
    const index = key.split('.')[0];
    return { ...acc, [index]: initialData[index] };
  }, {});
};

const postGoals = async goals => {
  try {
    console.log('postGoals', goals);
    await alanbaseApi.post(
      `/goals/${process.env.ALANBASE_API_PATH_KEY}`,
      goals,
    );
  } catch (error) {
    const data = error.response.data;
    console.log('postGoals error', data);
    const goalsWithErrors = buildErrorInfo(data, goals);
    console.log('Goals with errors', goalsWithErrors);

    // throw error;
  }
};

const postEvents = async events => {
  try {
    console.log('postEvents', events);
    await alanbaseApi.post(
      `/events/${process.env.ALANBASE_API_PATH_KEY}`,
      events,
    );
  } catch (error) {
    const data = error.response.data;
    console.log('postEvents error', data);
    const eventsWithErrors = buildErrorInfo(data, events);
    console.log('Events with errors', eventsWithErrors);

    // throw error;
  }
};

module.exports = { postGoals, postEvents };
