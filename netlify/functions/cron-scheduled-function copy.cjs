require('../../index');

const { handleRegistrations, handleEvents } = require('../../controllers');

const handler = async () => {
  await handleRegistrations();
  await handleEvents();

  return {
    statusCode: 200,
  };
};

module.exports.handler = handler;
