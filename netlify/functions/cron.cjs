const {
  handleRegistrations,
  handleEvents,
  handleBets,
} = require('../../controllers');

const handler = async () => {
  await handleRegistrations();
  // await handleEvents();
  // await handleBets();

  return {
    statusCode: 200,
  };
};

module.exports.handler = handler;
