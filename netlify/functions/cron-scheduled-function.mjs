// const serverless = require('serverless-http');
// const app = require('../../index');

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

export default async req => {
  const { next_run } = await req.json();

  console.log('Received event! Next invocation at:', next_run);
};

export const config = {
  schedule: '*/1 * * * *',
};
