const { schedule } = require('@netlify/functions');
require('../../index');

const {
  handleRegistrations,
  handleEvents,
  handleBets,
} = require('../../controllers');

const handler = async () => {
  await handleRegistrations();
  await handleEvents();
  await handleBets();

  return {
    statusCode: 200,
  };
};

module.exports.handler = schedule(
  `*/${process.env.FETCH_INTERVAL_MINUTES} * * * *`,
  handler,
);
