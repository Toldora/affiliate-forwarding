// const serverless = require('serverless-http');
// const app = require('../../index');

import {
  handleBets,
  handleEvents,
  handleRegistrations,
} from '../../controllers';

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

export default () => {
  handleRegistrations();
  handleEvents();
  handleBets();
};

// every 5 minutes
// '*/5 * * * *'
export const config = {
  schedule: `*/${process.env.FETCH_INTERVAL_MINUTES} * * * *`,
};
