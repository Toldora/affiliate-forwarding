// const serverless = require('serverless-http');
require('../../index');

const {
  handleRegistrations,
  handleEvents,
  handleBets,
} = require('../../controllers');

// every 5 minutes
// '0 */5 * * * *'
// every 10 seconds
// '*/10 * * * * *'
// cron.schedule(`0 */${process.env.FETCH_INTERVAL_MINUTES} * * * *`, () => {
//   handleRegistrations();
//   handleEvents();
//   handleBets();
// });

// eslint-disable-next-line import/prefer-default-export
// export const handler = serverless(app);

const handler = async () => {
  handleRegistrations();
  handleEvents();
  handleBets();

  return {
    statusCode: 200,
  };
};

module.exports = { handler };
