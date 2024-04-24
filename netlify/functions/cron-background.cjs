const {
  handleRegistrations,
  handleEvents,
  handleBets,
} = require('../../controllers');

const handler = async () => {
  await handleRegistrations();
  // await handleEvents();
  // await handleBets();
};

module.exports.handler = handler;
