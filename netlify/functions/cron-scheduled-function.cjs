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
  console.log('cron');
  handleRegistrations();
  handleEvents();
  handleBets();
};

const config = {
  schedule: '*/1 * * * *',
};

module.exports = { handler, config };
